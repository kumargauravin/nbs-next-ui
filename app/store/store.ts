import { create } from 'zustand'
export const useDashboardStore = create((set) => ({
    dataSegment: 'vbg',
    dataGroup: 'ond',
    filter_report_type: 'daily',
    filter_channels: [],
    filter_report_period: 'currentMonth',
    start: '',
    end: '',
    apiDetails: {},
    apiSummary: {},
    firstLoadPending: true,
    setApiDetails: (filter: any) => set((state: any) => ({ ...state, ...{apiDetails:filter}})),
    setFirstLoadPending: (filter: boolean) => set((state: any) => ({ ...state, ...{firstLoadPending:filter}})),
    setFilterReportType: (filter: string) => set((state: any) => ({ ...state, ...{filter_report_type:filter}})),
    setFilterReportPeriod: (filter: string) => set((state: any) => ({ ...state, ...{filter_report_period:filter}})),
    setFilterReportPeriodStart: (filter: any) => set((state: any) => ({ ...state, ...{start:filter}})),
    setFilterReportPeriodEnd: (filter: any) => set((state: any) => ({ ...state, ...{end:filter}})),
    setFilterChannels: (filter: any[]) => set((state: any) => ({ ...state, ...{filter_channels:filter}}))
  }))