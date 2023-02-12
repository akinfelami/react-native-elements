module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['overview', 'installation', 'troubleshooting'],
      collapsed: false,
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Customization',
      items: [
        {
          type: 'autogenerated',
          dirName: 'customization',
        },
      ],
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Components',
      items: [
        'components/airbnbrating',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/avatar' },
          label: 'Avatar',
          items: ['components/avatar_accessory'],
        },
        'components/badge',
        'components/bottomsheet',
        'components/button',
        'components/buttongroup',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/card' },
          label: 'Card',
          items: [
            'components/card_divider',
            'components/card_featuredsubtitle',
            'components/card_featuredtitle',
            'components/card_image',
            'components/card_title',
          ],
        },
        'components/checkbox',
        'components/chip',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/dialog' },
          label: 'Dialog',
          items: [
            'components/dialog_actions',
            'components/dialog_button',
            'components/dialog_loading',
            'components/dialog_title',
          ],
        },
        'components/divider',
        'components/fab',
        'components/header',
        'components/icon',
        'components/image',
        'components/input',
        'components/linearprogress',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/listitem' },
          label: 'ListItem',
          items: [
            'components/listitem_accordion',
            'components/listitem_buttongroup',
            'components/listitem_checkbox',
            'components/listitem_chevron',
            'components/listitem_content',
            'components/listitem_input',
            'components/listitem_subtitle',
            'components/listitem_swipeable',
            'components/listitem_title',
          ],
        },
        'components/overlay',
        'components/pricingcard',
        'components/searchbar',
        'components/slider',
        'components/skeleton',
        'components/socialicon',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/speeddial' },
          label: 'SpeedDial',
          items: ['components/speeddial_action'],
        },
        'components/switch',
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/tab' },
          label: 'Tab',
          items: ['components/tab_item'],
        },
        {
          collapsible: false,
          type: 'category',
          link: { type: 'doc', id: 'components/tabview' },
          label: 'TabView',
          items: ['components/tabview_item'],
        },
        'components/text',
        'components/tile',
        'components/tooltip',
      ],
    },
    // {
    //   type: 'category',
    //   collapsed: false,
    //   label: 'More Components',
    //   items: [
    //     {
    //       type: 'autogenerated',
    //       dirName: 'universe',
    //     },
    //   ],
    // },
    {
      type: 'category',
      collapsed: false,
      label: 'See also',
      items: [
        'repo/contributing',
        'repo/testing',
        'repo/labels',
        {
          type: 'link',
          label: 'Migration Guides',
          href: '/migration',
        },
        {
          type: 'link',
          label: 'Sponsors',
          href: '/sponsor',
        },
        {
          type: 'link',
          label: 'Blog',
          href: '/blog',
        },
        {
          type: 'link',
          label: 'Help',
          href: '/help',
        },
      ],
    },
  ],
};
