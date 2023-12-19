export type HowToPageFields = {
  title: string;
  page: HOWTOPAGEPage;
  slug: string;
  path: string;
  updatedAt: string;
  createdAt: string;
  locale: string;
}

export type HowToPageProps = {
  id: number;
  attributes: HowToPageFields;
};

type HOWTOPAGEPage = {
  data: HOWTOPAGE_PAGE_TEXTNODE;
};
type HOWTOPAGE_PAGE_TEXTNODE = {
  id: string;
  page: string;
};
