export interface Membership {
  id: string;
  organisation: string;
  designation: string;
  since: number;
}

export const memberships: Membership[] = [
  { id: 'mem-01', organisation: 'Royal Society of Chemistry (RSC), UK', designation: 'Member (MRSC)', since: 2023 },
  { id: 'mem-02', organisation: 'Materials Research Society Placeholder', designation: 'Member', since: 2022 },
  { id: 'mem-03', organisation: 'Electrochemical Society Placeholder', designation: 'Member', since: 2023 },
];
