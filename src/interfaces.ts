// Global response types
export interface IVideoData {
  success: boolean;
  data: {
    title: string;
    id: string;
    image?: string;
    duration: string;
    views: string;
    rating?: string;
    uploaded: string;
    upvoted: string | null;
    downvoted: string | null;
    channel?: string;
    models: string[];
    tags: string[];
  };
  source: string;
  assets: string[];
}

export interface ISearchVideoData {
  success: boolean;
  data: string[];
  source: string;
}

export interface ISearchItem {
  link: string;
  id: string;
  title?: string;
  image?: string;
  duration?: string;
  rating?: string;
  views?: string;
  uploader?: string;
  video?: string;
}

export interface MaybeError {
  message: string;
}

// Pornhub
export interface PornhubSearchItem {
  link: string;
  id: string;
  title: string;
  image: string;
  duration: string;
  views: string;
  video: string;
}

// Xvideos
export interface XvideosSearchItem {
  link: string;
  id: string;
  image: string;
  title: string;
  duration: string;
  rating: string | null;
  video: string;
}

export interface XvideosRelatedRaw {
  u: string;
  t: string;
  i: string;
  d: string;
  n: string;
  r: string;
  id: string | number;
}

// Xnxx
export interface XnxxRelatedRaw {
  u: string;
  t: string;
  i: string;
  d: string;
  n: string;
  r: string;
  id: string | number;
}

// Xhamster
export interface XhamsterSearchItem {
  link: string;
  id: string;
  title: string;
  image: string;
  duration: string;
  views: string;
  video: string;
}

export interface XhamsterTag {
  isTag?: boolean;
  isPornstar?: boolean;
  name: string;
}

export interface XhamsterInitials {
  ratingComponent?: {
    ratingModel?: {
      value?: number;
      likes?: number;
      dislikes?: number;
    };
  };
  videoTagsComponent?: {
    tags?: XhamsterTag[];
  };
}

// Redtube
export interface RedTubeSearchItem {
  link: string;
  id: string;
  title: string;
  image: string;
  duration: string;
  views: string;
  video: string;
}

// Txxx
export interface TxxxCategory {
  title: string;
}

export interface TxxxVideo {
  title?: string;
  video_id: string | number;
  thumbsrc?: string;
  thumb?: string;
  duration?: string;
  statistics?: {
    viewed?: string;
    rating?: string;
    likes?: number;
    dislikes?: number;
  };
  post_date?: string;
  channel?: { title?: string };
  categories?: Record<string, TxxxCategory>;
  tags?: Record<string, TxxxCategory>;
  models?: Record<string, TxxxCategory>;
  models_suggested?: string[];
  dir?: string;
}

export interface TxxxResponse {
  video?: TxxxVideo;
}

export interface TxxxSearchVideo {
  video_id: string | number;
  title: string;
  dir?: string;
  duration?: string;
  video_viewed?: string;
  rating?: string;
  post_date?: string;
  likes?: number;
  dislikes?: number;
  scr?: string;
  categories?: string;
}

export interface TxxxSearchResponse {
  videos?: TxxxSearchVideo[];
  total_count?: string | number;
  pages?: number;
}

export interface TxxxRelatedVideo {
  video_id: string | number;
  title: string;
  scr?: string;
  thumb?: string;
  duration?: string;
  video_viewed?: string;
  rating?: string;
  username?: string;
  display_name?: string;
  dir?: string;
}

export interface TxxxRelatedResponse {
  videos?: TxxxRelatedVideo[];
  total_count?: string | number;
  pages?: number;
}
