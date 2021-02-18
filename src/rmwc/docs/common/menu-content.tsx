import React from 'react';
import { CircularProgress } from '@srmwc/circular-progress';
import { DocsMarkdown } from '../../../doc-utils';

import InstallationMD from '../markdown/README-INSTALLATION.md';
import UsageMD from '../markdown/README-USAGE.md';
import StylingMD from '../markdown/README-STYLING-THEMING.md';
import MethodologyMD from '../markdown/README-METHODOLOGY.md';
import LibraryIntegrationsMD from '../markdown/README-LIBRARY-INTEGRATIONS.md';
import TypesMD from '../markdown/README-TYPES.md';

import { galleryExample as avatarExample } from '@srmwc/avatar/readme';
import { galleryExample as badgeExample } from '@srmwc/badge/readme';
import { galleryExample as buttonExample } from '@srmwc/button/readme';
import { galleryExample as fabExample } from '@srmwc/fab/readme';
import { galleryExample as iconButtonExample } from '@srmwc/icon-button/readme';
import { galleryExample as cardExample } from '@srmwc/card/readme';
import { galleryExample as chipExample } from '@srmwc/chip/readme';
import { galleryExample as dataTableExample } from '@srmwc/data-table/readme';
import { galleryExample as drawerExample } from '@srmwc/drawer/readme';
import { galleryExample as dialogExample } from '@srmwc/dialog/readme';
import { galleryExample as elevationExample } from '@srmwc/elevation/readme';
import { galleryExample as gridListExample } from '@srmwc/grid-list/readme';
import { galleryExample as imageListExample } from '@srmwc/image-list/readme';
import { galleryExample as checkboxExample } from '@srmwc/checkbox/readme';
import { galleryExample as radioExample } from '@srmwc/radio/readme';
import { galleryExample as selectExample } from '@srmwc/select/readme';
import { galleryExample as sliderExample } from '@srmwc/slider/readme';
import { galleryExample as switchExample } from '@srmwc/switch/readme';
import { galleryExample as textfieldExample } from '@srmwc/textfield/readme';
import { galleryExample as gridExample } from '@srmwc/grid/readme';
import { galleryExample as linearProgressExample } from '@srmwc/linear-progress/readme';
import { galleryExample as circularProgressExample } from '@srmwc/circular-progress/readme';
import { galleryExample as listExample } from '@srmwc/list/readme';
import { galleryExample as menuExample } from '@srmwc/menu/readme';
import { galleryExample as rippleExample } from '@srmwc/ripple/readme';
import { galleryExample as snackbarExample } from '@srmwc/snackbar/readme';
import { galleryExample as tabsExample } from '@srmwc/tabs/readme';
import { galleryExample as themeExample } from '@srmwc/theme/readme';
import { galleryExample as topAppBarExample } from '@srmwc/top-app-bar/readme';
import { galleryExample as tooltipExample } from '@srmwc/tooltip/readme';
import { galleryExample as typographyExample } from '@srmwc/typography/readme';
import { galleryExample as iconExample } from '@srmwc/icon/readme';

const InstallationDocs = () => <DocsMarkdown fileSrc={InstallationMD} />;
const UsageDocs = () => <DocsMarkdown fileSrc={UsageMD} />;
const StylingThemingDocs = () => <DocsMarkdown fileSrc={StylingMD} />;
const MethodologyDocs = () => <DocsMarkdown fileSrc={MethodologyMD} />;
const LibraryIntegrationsDocs = () => (
  <DocsMarkdown fileSrc={LibraryIntegrationsMD} />
);
const TypeDocs = () => <DocsMarkdown fileSrc={TypesMD} />;

const ResourcesDocs = React.lazy(() => import('../views/resources'));

const AvatarDocs = React.lazy(() => import('@srmwc/avatar/readme'));
const BadgeDocs = React.lazy(() => import('@srmwc/badge/readme'));
const ButtonDocs = React.lazy(() => import('@srmwc/button/readme'));
const FabDocs = React.lazy(() => import('@srmwc/fab/readme'));
const IconButtonDocs = React.lazy(() => import('@srmwc/icon-button/readme'));
const CardDocs = React.lazy(() => import('@srmwc/card/readme'));
const ChipDocs = React.lazy(() => import('@srmwc/chip/readme'));
const DataTableDocs = React.lazy(() => import('@srmwc/data-table/readme'));
const DialogDocs = React.lazy(() => import('@srmwc/dialog/readme'));
const DrawerDocs = React.lazy(() => import('@srmwc/drawer/readme'));
const ElevationDocs = React.lazy(() => import('@srmwc/elevation/readme'));
const GridListDocs = React.lazy(() => import('@srmwc/grid-list/readme'));
const ImageListDocs = React.lazy(() => import('@srmwc/image-list/readme'));
const CheckboxDocs = React.lazy(() => import('@srmwc/checkbox/readme'));
const FormfieldDocs = React.lazy(() => import('@srmwc/formfield/readme'));
const RadioDocs = React.lazy(() => import('@srmwc/radio/readme'));
const SelectDocs = React.lazy(() => import('@srmwc/select/readme'));
const SliderDocs = React.lazy(() => import('@srmwc/slider/readme'));
const SwitchDocs = React.lazy(() => import('@srmwc/switch/readme'));
const TextfieldDocs = React.lazy(() => import('@srmwc/textfield/readme'));
const GridDocs = React.lazy(() => import('@srmwc/grid/readme'));
const LinearProgressDocs = React.lazy(() =>
  import('@srmwc/linear-progress/readme')
);
const CircularProgressDocsDocs = React.lazy(() =>
  import('@srmwc/circular-progress/readme')
);
const ListDocs = React.lazy(() => import('@srmwc/list/readme'));
const ListCollapsibleDocs = React.lazy(() =>
  import('@srmwc/list/readme-collapsible')
);
const ListVariantsDocs = React.lazy(() => import('@srmwc/list/readme-variants'));
const MenuDocs = React.lazy(() => import('@srmwc/menu/readme'));
const RippleDocs = React.lazy(() => import('@srmwc/ripple/readme'));
const SnackbarDocs = React.lazy(() => import('@srmwc/snackbar/readme'));
const TabsDocs = React.lazy(() => import('@srmwc/tabs/readme'));
const ThemeDocs = React.lazy(() => import('@srmwc/theme/readme'));
const TopAppBarDocs = React.lazy(() => import('@srmwc/top-app-bar/readme'));
const TypographyDocs = React.lazy(() => import('@srmwc/typography/readme'));
const IconDocs = React.lazy(() => import('@srmwc/icon/readme'));
const ProviderDocs = React.lazy(() => import('@srmwc/provider/readme'));
const TooltipDocs = React.lazy(() => import('@srmwc/tooltip/readme'));

const Loading = () => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      boxSizing: 'border-box'
    }}
  >
    <CircularProgress size="xlarge" />
  </div>
);

const Loadable = (Component: any) => () => (
  <React.Suspense fallback={<Loading />}>
    <Component />
  </React.Suspense>
);

export type MenuItemT = {
  label: string;
  url?: string;
  gallery?: React.ReactNode;
  component?: () => JSX.Element;
  options?: MenuItemT[];
};

export const menuContent: MenuItemT[] = [
  {
    label: 'Getting Started',
    options: [
      {
        label: 'Installation',
        url: `/installation`,
        component: Loadable(InstallationDocs)
      },
      {
        label: 'Basic Usage',
        url: `/usage`,
        component: Loadable(UsageDocs)
      },
      {
        label: 'Project Methodology',
        url: `/methodology`,
        component: Loadable(MethodologyDocs)
      },
      {
        label: 'Type System',
        url: `/type-system`,
        component: Loadable(TypeDocs)
      },
      {
        label: 'Library Integrations',
        url: `/library-integrations`,
        component: Loadable(LibraryIntegrationsDocs)
      }
    ]
  },
  {
    label: 'Style and Theming',
    url: `/styling-theming`,
    component: Loadable(StylingThemingDocs)
  },
  {
    label: 'Resources',
    url: `/resources`,
    component: Loadable(ResourcesDocs)
  },
  {
    label: 'Components',
    options: [
      {
        label: 'Avatars',
        url: `/avatars`,
        gallery: avatarExample,
        component: Loadable(AvatarDocs)
      },
      {
        label: 'Badges',
        url: `/badges`,
        gallery: badgeExample,
        component: Loadable(BadgeDocs)
      },
      {
        label: 'Buttons',
        options: [
          {
            label: 'Buttons',
            url: `/buttons`,
            gallery: buttonExample,
            component: Loadable(ButtonDocs)
          },
          {
            label: 'Fabs',
            url: `/fabs`,
            gallery: fabExample,
            component: Loadable(FabDocs)
          },
          {
            label: 'Icon Buttons',
            url: `/icon-buttons`,
            gallery: iconButtonExample,
            component: Loadable(IconButtonDocs)
          }
        ]
      },
      {
        label: 'Cards',
        url: `/cards`,
        gallery: cardExample,
        component: Loadable(CardDocs)
      },
      {
        label: 'Chips',
        url: `/chips`,
        gallery: chipExample,
        component: Loadable(ChipDocs)
      },
      {
        label: 'Data Tables',
        url: `/data-tables`,
        gallery: dataTableExample,
        component: Loadable(DataTableDocs)
      },
      {
        label: 'Dialogs',
        url: `/dialogs`,
        gallery: dialogExample,
        component: Loadable(DialogDocs)
      },
      {
        label: 'Drawers',
        url: `/drawers`,
        gallery: drawerExample,
        component: Loadable(DrawerDocs)
      },
      {
        label: 'Elevation',
        url: `/elevation`,
        gallery: elevationExample,
        component: Loadable(ElevationDocs)
      },
      {
        label: 'Grids',
        options: [
          {
            label: 'Layout Grid',
            url: `/layout-grid`,
            gallery: gridExample,
            component: Loadable(GridDocs)
          },
          {
            label: 'Image Lists',
            url: `/image-lists`,
            gallery: imageListExample,
            component: Loadable(ImageListDocs)
          },
          {
            label: 'Grid Lists',
            url: `/grid-lists`,
            gallery: gridListExample,
            component: Loadable(GridListDocs)
          }
        ]
      },

      {
        label: 'Inputs and Controls',
        options: [
          {
            label: 'Checkboxes',
            url: `/checkboxes`,
            gallery: checkboxExample,
            component: Loadable(CheckboxDocs)
          },
          {
            label: 'FormFields',
            url: `/formfields`,
            component: Loadable(FormfieldDocs)
          },
          {
            label: 'Radio Buttons',
            url: `/radio-buttons`,
            gallery: radioExample,
            component: Loadable(RadioDocs)
          },
          {
            label: 'Select Menus',
            url: `/select-menus`,
            gallery: selectExample,
            component: Loadable(SelectDocs)
          },
          {
            label: 'Sliders',
            url: `/sliders`,
            gallery: sliderExample,
            component: Loadable(SliderDocs)
          },
          {
            label: 'Switches',
            url: `/switches`,
            gallery: switchExample,
            component: Loadable(SwitchDocs)
          },
          {
            label: 'Text Fields',
            url: `/text-fields`,
            gallery: textfieldExample,
            component: Loadable(TextfieldDocs)
          }
        ]
      },

      {
        label: 'Progress',
        options: [
          {
            label: 'Linear Progress',
            url: `/linear-progress`,
            gallery: linearProgressExample,
            component: Loadable(LinearProgressDocs)
          },
          {
            label: 'Circular Progress',
            url: `/circular-progress`,
            gallery: circularProgressExample,
            component: Loadable(CircularProgressDocsDocs)
          }
        ]
      },
      {
        label: 'Lists',
        options: [
          {
            label: 'Lists',
            url: `/lists`,
            gallery: listExample,
            component: Loadable(ListDocs)
          },
          {
            label: 'Collapsible',
            url: `/lists-collapsible`,
            component: Loadable(ListCollapsibleDocs)
          },
          {
            label: 'Variants',
            url: `/lists-variants`,
            component: Loadable(ListVariantsDocs)
          }
        ]
      },
      {
        label: 'Menus',
        url: `/menus`,
        gallery: menuExample,
        component: Loadable(MenuDocs)
      },
      {
        label: 'Ripples',
        url: `/ripples`,
        gallery: rippleExample,
        component: Loadable(RippleDocs)
      },

      {
        label: 'Snackbars',
        url: `/snackbars`,
        gallery: snackbarExample,
        component: Loadable(SnackbarDocs)
      },
      {
        label: 'Tabs',
        url: `/tabs`,
        gallery: tabsExample,
        component: Loadable(TabsDocs)
      },
      {
        label: 'Theme',
        url: `/theme`,
        gallery: themeExample,
        component: Loadable(ThemeDocs)
      },
      {
        label: 'Tooltips',
        url: `/tooltips`,
        gallery: tooltipExample,
        component: Loadable(TooltipDocs)
      },
      {
        label: 'Top App Bar',
        url: `/top-app-bar`,
        gallery: topAppBarExample,
        component: Loadable(TopAppBarDocs)
      },

      {
        label: 'Typography',
        url: `/typography`,
        gallery: typographyExample,
        component: Loadable(TypographyDocs)
      },
      {
        label: 'Icons',
        url: `/icons`,
        gallery: iconExample,
        component: Loadable(IconDocs)
      },
      {
        label: 'Provider',
        url: `/provider`,
        component: Loadable(ProviderDocs)
      }
    ]
  }
];

export const galleryContent = menuContent
  .reduce<MenuItemT[]>((acc, item) => {
    if ('options' in item) {
      acc.push(...item.options);
    } else {
      acc.push(item as MenuItemT);
    }

    return acc;
  }, [])
  .filter(item => !!item.gallery);
