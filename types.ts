
export enum PageType {
  HOME = 'home',
  PUBLIC_SHOW = 'public_show',
  USER = 'user',
  DETAIL = 'detail',
  LOGIC = 'logic',
  CATEGORY_LIST = 'category_list',
  ARTICLE_DETAIL = 'article_detail'
}

export interface CharityProject {
  id: string;
  title: string;
  summary: string;
  image: string;
  goalAmount: number;
  raisedAmount: number;
  donorsCount: number;
  category: string;
  status: 'ongoing' | 'finished';
  timestamp?: string;
}

export interface DonationRecord {
  id: string;
  userAvatar: string;
  userName: string;
  amount: number;
  projectName: string;
  time: string;
  image: string;
}
