import { BCMSEntryContentParsedItem } from '@becomes/cms-client/types';
import { LegalEntryMeta } from '@/bcms/types';

export interface LegalPageData {
  entries: Array<{
    meta: {
      en: LegalEntryMeta;
    };
    content: BCMSEntryContentParsedItem[];
  }>;
}
