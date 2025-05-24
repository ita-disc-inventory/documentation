// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Project Documentation',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'documentation-docs/introduction/index',
          label: 'Documentation Introduction'
        },
        {
          type: 'doc',
          id: 'documentation-docs/installation/index',
          label: 'Installation'
        },
        {
          type: 'doc',
          id: 'documentation-docs/usage/index',
          label: 'Usage'
        },
        {
          type: 'doc',
          id: 'documentation-docs/project-structure/index',
          label: 'Project Structure'
        }
      ]
    },
    {
      type: 'category',
      label: 'Handoff Documentation',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'handoff-docs/introduction/index',
          label: 'Handoff Introduction'
        },
        {
          type: 'doc',
          id: 'handoff-docs/future-development/index',
          label: 'Future Development'
        },
        {
          type: 'doc',
          id: 'handoff-docs/credits/index',
          label: 'Credits'
        },
        {
          type: 'doc',
          id: 'handoff-docs/acknowledgements/index',
          label: 'Acknowledgements'
        },
      ]
    }
  ],
};

export default sidebars;
