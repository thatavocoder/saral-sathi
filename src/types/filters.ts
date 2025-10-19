export const TimeRange = {
  AllTime: 'all-time',
  Last7Days: 'last-7-days',
  Last30Days: 'last-30-days',
  Last90Days: 'last-90-days',
} as const

export type TimeRange = (typeof TimeRange)[keyof typeof TimeRange]
