import type { ComponentPropsWithoutRef } from 'react'
import React, { forwardRef } from 'react'

export const IconShoppingCartSimple = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(function IconShoppingCartSimple(props, ref) {
  return (
    <svg
      data-sl-icon
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M6.625 17.9688C7.22906 17.9688 7.71875 17.4791 7.71875 16.875C7.71875 16.2709 7.22906 15.7812 6.625 15.7812C6.02094 15.7812 5.53125 16.2709 5.53125 16.875C5.53125 17.4791 6.02094 17.9688 6.625 17.9688Z"
        fill="currentColor"
      />
      <path
        d="M14.75 17.9688C15.3541 17.9688 15.8438 17.4791 15.8438 16.875C15.8438 16.2709 15.3541 15.7812 14.75 15.7812C14.1459 15.7812 13.6562 16.2709 13.6562 16.875C13.6562 17.4791 14.1459 17.9688 14.75 17.9688Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.25 2.5C0.25 2.08579 0.585786 1.75 1 1.75H2.31406C2.61275 1.75006 2.90344 1.84737 3.14191 2.02723C3.38037 2.20709 3.55379 2.4597 3.63593 2.74687L4.24394 4.875H17.875C18.113 4.875 18.3369 4.98796 18.4783 5.17941C18.6197 5.37085 18.6618 5.61804 18.5918 5.84552L16.3637 13.0885C16.2378 13.4973 15.984 13.8553 15.6398 14.1093C15.2955 14.3633 14.8789 14.5002 14.4511 14.5H6.94329C6.50874 14.5001 6.08564 14.3587 5.73862 14.0971C5.3915 13.8355 5.13908 13.4679 5.01954 13.05L2.21965 3.25H2.31392C2.28676 3.24999 2.26035 3.24115 2.23867 3.2248C2.21701 3.20846 2.20117 3.18524 2.1937 3.15916L2.21965 3.25H1C0.585786 3.25 0.25 2.91421 0.25 2.5ZM4.67249 6.375L6.46171 12.6375C6.49162 12.7419 6.55476 12.8339 6.64148 12.8993C6.72825 12.9647 6.83398 13 6.94265 13H14.4516C14.5585 13.0001 14.6631 12.9658 14.7491 12.9023C14.8351 12.8389 14.8985 12.7496 14.93 12.6474L16.8596 6.375H4.67249Z"
        fill="currentColor"
      />
    </svg>
  )
})
