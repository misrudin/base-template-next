type SeoType = 'article' | 'product' | 'event' | 'website';

export interface ISeo {
  readonly title: string;
  readonly description: string;
  readonly imageUrl?: string;
  readonly noIndex?: boolean;
  readonly urlCanonical?: string;
  readonly type: SeoType;
  readonly keywords?: string;
}
