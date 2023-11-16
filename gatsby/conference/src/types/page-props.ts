import { HeaderEntryMeta, LegalEntry } from '../../bcms/types';
import { FooterEntryMeta } from '../../bcms/types/entry/footer';

export interface PageData<
  Page = {
    meta: {
      en: {
        title: string;
        seo: {
          title: string;
          description: string;
        };
      };
    };
  },
> {
  location: string;
  defaultTitle: string;
  page: {
    bcms: Page;
  };
  header: {
    bcms: {
      meta: {
        en: HeaderEntryMeta;
      };
    };
  };
  footer: {
    bcms: {
      meta: {
        en: FooterEntryMeta;
      };
    };
  };
  legal: {
    nodes: Array<{
      bcms: LegalEntry;
    }>;
  };
}
