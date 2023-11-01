export interface Pagination<Item> {
  limit: number;
  offset: number;
  total: number;
  list: Item[];
}

export interface User {
  id: number;
  nickName: string;
  createdAt: string;
  profile: {
    description: string;
    subTitle: string;
    backgroundImageUrl: string;
    profileImageUrl: string;
    instagramUrl: string;
  };
  followerCount: number;
  followingCount: number;
  reviewCount: number;
  followerList(limit: number, offset: number): Pagination<User>[];
  followingList(limit: number, offset: number): Pagination<User>[];
}

export interface Review {
  id: number;
  place: {
    id: string;
    name: string;
    address: string;
  };
  user: {
    id: number;
    profileImageUrl: string;
  };
  title: string;
  content: string;
  imageUrl: string;
  good: number;
  rating: number;
  instagramPostUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileInput {
  nickName: string;
  description?: string;
  subTitle?: string;
  backgroundImageUrl?: string;
  profileImageUrl?: string;
  instagramUrl?: string;
}

export interface UpdateProfilePayload {
  nickName: string;
  description: string | null;
  subTitle: string | null;
  backgroundImageUrl: string | null;
  profileImageUrl: string | null;
  instagramUrl: string | null;
}

export interface CreateReviewInput {
  title: string;
  content: string;
  imageUrl?: string;
  rating?: number;
  instagramPostUrl?: string;
  place?: {
    id: string;
    name: string;
    address: string;
  };
}

export interface CreateReviewPayload {
  title: string;
  content: string;
  imageUrl: string | null;
  rating: number | null;
  instagramPostUrl: string | null;
  place: {
    id: string;
    name: string;
    address: string;
  } | null;
}

export interface PlaceGoodPayload {
  placeId: string;
  good: boolean;
}

export interface ReviewGoodPayload {
  id: string;
  good: boolean;
}

// ======================================================================
// ======================================================================

export interface Query {
  me: {
    name: string;
    email: string;
    user: User;
  };
  user(id: number): User;
  reviewList(
    limit?: number,
    offset?: number,
    filter?: { placeId?: string; keyword?: string },
  ): Pagination<Review>[];
  review(id: number): Review;
  placeGoodCount(placeId: string): number;
}

export interface Mutation {
  User_follow(id: number, follow: boolean): User;
  Profile_update(input: UpdateProfileInput): UpdateProfilePayload;
  Review_create(input: CreateReviewInput): CreateReviewPayload;
  Place_good(placeId: string, good: boolean): PlaceGoodPayload;
  Review_good(id: string, good: boolean): ReviewGoodPayload;
  signIn(provider: 'kakao' | 'naver' | 'google'): boolean;
  signOut(): boolean;
}
