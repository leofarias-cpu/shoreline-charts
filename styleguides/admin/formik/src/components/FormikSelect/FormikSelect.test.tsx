import React from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ThemeProvider } from '@vtex/admin-core'
import { IntlProvider, useIntl } from 'react-intl'
import { Form, Formik } from 'formik'
import { FormikSelect } from './index'
import { Button } from '@vtex/admin-ui';

describe('Select tests', () => {
  it('change value in formik by input component', async () => {
    const handleSubmit = jest.fn()
    const options = ['option 1', 'option 2', 'option 3', 'error']

    render( 
      <ThemeProvider>
        <Formik
          initialValues={{value: ''}}
          onSubmit={handleSubmit}
        >
          <Form id='form-admin-formik-input'>
            <FormikSelect
              name="value"
              items={options}
              data-testid="text-field"
              label="TextField label"
            />
            <Button type="submit" size='small' children="Submit"/>
          </Form>
        </Formik>
      </ThemeProvider>
    )
    
    userEvent.click(screen.getByRole('button',{ name: /TextField label/i}))
    userEvent.click(screen.getByText(options[2]))

    userEvent.click(screen.getByRole('button', {name: "Submit"}))

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        value: options[2]
      }, expect.anything())
    )
  })

  it('change value in formik by setFieldValue', async () => {
    const handleSubmit = jest.fn()
    const options = ['option 1', 'option 2', 'option 3', 'error']

    render(
      <ThemeProvider>
        <Formik
          initialValues={{value: ''}}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form id='form-admin-formik-input'>
              <FormikSelect
                name="value"
                items={options}
                data-testid="text-field"
                label="TextField label"
              />
              <Button 
                size='small' 
                children="Change Value" 
                onClick={()=> setFieldValue("value", options[0])}
              />
              <Button type="submit" size='small' children="Submit"/>
            </Form>
          )}
        </Formik>
      </ThemeProvider>
    )


    const select = screen.getByRole('button',{ name: /TextField label/i})
    userEvent.click(select)
    userEvent.click(screen.getByText(options[2]))
    expect(select).toHaveTextContent(options[2])

    userEvent.click(screen.getByRole('button', {name: "Change Value"}))

    expect(select).toHaveTextContent(options[0])

    userEvent.click(screen.getByRole('button', {name: "Submit"}))

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        value: options[0]
      }, expect.anything())
    )
  })

  it('change initial value in formik', async () => {
    const handleSubmit = jest.fn()
    const options = ['option 1', 'option 2', 'option 3', 'error']

    const { rerender } = 
    render(
      <ThemeProvider>
        <Formik
          enableReinitialize
          initialValues={{value: ""}}
          onSubmit={handleSubmit}
        >
          <Form id='form-admin-formik-input'>
            <FormikSelect
              name="value"
              data-testid="text-field"
              label="TextField label"
              items={options}
            />
            <Button type="submit" size='small' children="Submit"/>
          </Form>
        </Formik>
      </ThemeProvider>
    )

    const select = screen.getByRole('button',{ name: /TextField label/i})

    userEvent.click(select)
    userEvent.click(screen.getByText(options[2]))
    await waitFor(() => expect(select).toHaveTextContent(options[2]))
    
    rerender(
      <ThemeProvider>
        <Formik
          enableReinitialize
          initialValues={{value: options[0]}}
          onSubmit={handleSubmit}
        >
          <Form id='form-admin-formik-input'>
            <FormikSelect
              name="value"
              items={options}
              data-testid="text-field"
              label="TextField label"
              />
            <Button type="submit" size='small' children="Submit"/>
          </Form>
        </Formik>
      </ThemeProvider>
    )
    
    await waitFor(() => expect(select).toHaveTextContent(options[0]))

  })

  it('error in forms', async () => {
    const handleSubmit = jest.fn()
    const options = ['option 1', 'option 2', 'option 3', 'error']

    const validate = () => ({ value: 'Error message' });

    render( 
      <ThemeProvider>
        <Formik
          initialValues={{value: ''}}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form id='form-admin-formik-input'>
            <FormikSelect
              name="value"
              items={options}
              data-testid="text-field"
              label="TextField label"
            />
            <Button type="submit" size='small' children="Submit"/>
          </Form>
        </Formik>
      </ThemeProvider>
    )

    const select = screen.getByRole('button',{ name: /TextField label/i})
    userEvent.click(select)
    userEvent.click(screen.getByText(options[2]))

    expect(await screen.findByText("Error message")).not.toBeNull();
  })

  it('error in forms with intl', async () => {
    const options = ['option 1', 'option 2', 'option 3', 'error']
    const messagesEN = {
      'admin/admin-formik.error.message': "Error message"
    }

    const Content = () => {
      const handleSubmit = jest.fn()
      const { formatMessage } = useIntl()
      const validate = () => ({ value: 'admin/admin-formik.error.message' });

      return( 
        <Formik
          initialValues={{value: ''}}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form id='form-admin-formik-input'>
            <FormikSelect
              name="value"
              items={options}
              data-testid="text-field"
              label="TextField label"
              formatMessage={(errorCode) => formatMessage({ id: errorCode})}
            />
            <Button type="submit" size='small' children="Submit"/>
          </Form>
        </Formik>
      )
    }

    render( 
      <ThemeProvider>
        <IntlProvider locale={'en'} messages={messagesEN}>
          <Content/>
        </IntlProvider> 
      </ThemeProvider>
    )

    const select = screen.getByRole('button',{ name: /TextField label/i})
    userEvent.click(select)
    userEvent.click(screen.getByText(options[2]))

    expect(await screen.findByText("Error message")).not.toBeNull();
  })

})
