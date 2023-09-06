const fileName = '{{kebabCase name}}'

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Custom component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `packages/components/src/${fileName}/${fileName}.tsx`,
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/{{kebabCase name}}/{{kebabCase name}}.css.ts',
        templateFile: 'templates/component/component.css.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/{{kebabCase name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/{{kebabCase name}}/stories/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component/stories/component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/{{kebabCase name}}/tests/{{kebabCase name}}.test.tsx',
        templateFile: 'templates/component/tests/component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/components/src/index.ts',
        templateFile: 'templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'packages/components/src/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export * from './{{kebabCase name}}'`,
      },
    ],
  })
}
