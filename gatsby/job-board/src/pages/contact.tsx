import React, { useState } from 'react';
import { ContactPageEntryMeta, FooterEntryMeta, HeaderEntryMeta } from '../../bcms/types';
import { PageWrapper } from '@/components/PageWrapper';
import ContentManager from '@/components/ContentManager';
import FormText from '@/components/form/Text';
import Btn from '@/components/Btn';
import { BCMSPropRichTextDataParsed } from '@becomes/cms-client/types';
import { graphql } from 'gatsby';

interface Form {
  fullName: string;
  email: string;
  phoneNumber: string;
  details: string;
}

const ContactPage: React.FC<{
  data: {
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
    page: {
      bcms: {
        meta: {
          en: ContactPageEntryMeta;
        };
        content: {
          en: BCMSPropRichTextDataParsed;
        };
      };
    };
  };
  
}> = ({ data }) => {
  const [form, setForm] = useState<Form>({
    email: '',
    fullName: '',
    phoneNumber: '',
    details: '',
  });

  const handleFormChange = (name: string, value: string): void => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // TODO: Handle form submission
  };

  return (
    <PageWrapper
      header={data.header}
      footer={data.footer}
      page={data.page}
      location="/contact"
    >
      <div className="pt-8 pb-14 md:py-20 lg:py-[120px]">
        <div className="container">
          <div className="max-w-[632px] mx-auto">
            <h1 className="text-2xl leading-none font-medium font-PlayfairDisplay tracking-[-0.41px] text-center mb-4 md:text-3xl md:leading-none lg:text-[80px] lg:leading-none lg:mb-5">
              {data.page.bcms.meta.en.title}
            </h1>
            <ContentManager
              item={data.page.bcms.meta.en.description}
              className="text-sm leading-[1.4] font-medium tracking-[-0.41px] text-center text-appGray-600 max-w-[446px] mx-auto mb-12 lg:text-base lg:leading-normal lg:mb-[88px]"
            />
            <div className="grid grid-cols-1 gap-6 bg-[#E3E1DC] border border-[#B0AEAB] rounded-[14px] p-6 lg:p-8">
              <FormText
                value={form.fullName}
                label="Full name"
                name="fullName"
                placeholder="Enter your full name"
                onChange={(value) => handleFormChange('fullName', value)}
              />
              <FormText
                value={form.email}
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your email"
                onChange={(value) => handleFormChange('email', value)}
              />
              <FormText
                value={form.phoneNumber}
                name="phoneNumber"
                label="Phone number"
                placeholder="Enter your phone number"
                onChange={(value) => handleFormChange('phoneNumber', value)}
              />
              <FormText
                value={form.details}
                type="textarea"
                label="How can we help you?"
                name="details"
                placeholder="Give us details on how we can help you..."
                onChange={(value) => handleFormChange('details', value)}
              />
              <Btn
                className="justify-center w-full lg:mt-4"
                onClick={handleSubmit}
              >
                <span>Submit</span>
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};


export const query = graphql`
  query { 
    header: bcmsHeader {
      ...Header
    }
    footer: bcmsFooter {
      ...Footer
    }
    page: bcmsContactPage {
      ...ContactPage
    }
  }
`

export default ContactPage;
