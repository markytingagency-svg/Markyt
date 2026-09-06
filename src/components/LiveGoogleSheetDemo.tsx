import React, { useState } from 'react';
import { SAMPLE_SHEET_DATA } from '../data/content';
import {
  Table,
  CheckCircle2,
  Eye,
  FileSpreadsheet,
  TrendingDown,
  Sparkles,
  LayoutGrid,
  Columns,
  Info,
} from 'lucide-react';

export const LiveGoogleSheetDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState<'all' | 'key'>('all');
  const [expandedNoteIndex, setExpandedNoteIndex] = useState<number | null>(null);

  const totalSpent = 1694.90;
  const budgetCap = 5000;
  const totalLeads = 35;
  const blendedCpl = 48.43;

  return (
    <section id="live-sheet" className="relative py-14 sm:py-20 md:py-24 bg-[#F6F3EC] text-slate-950 overflow-hidden border-b border-slate-950/10 scroll-mt-24">
      
      {/* Decorative Red Marker */}
      <div className="absolute top-8 left-8 sm:left-16 w-3 h-3 rounded-full bg-[#FF3B14]" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Headline - tightened vertical rhythm */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 text-white text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>Live Campaign Data & Telemetry</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1]">
            Real Spend. <span className="squiggly-underline">Real Returns.</span>
          </h2>

          <p className="mt-2.5 text-sm sm:text-base text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Here's what the first 10 days of your test actually look like — all 10 days visible in one unified sheet.
          </p>
        </div>

        {/* Google Sheet Campaign Performance Tracker Container */}
        <div className="bg-white border border-black/10 rounded-2xl overflow-hidden shadow-md">
          
          {/* Simulated Google Sheet Top Bar */}
          <div 
            id="live-sheet-header-bar"
            className="bg-emerald-950 text-white px-3.5 sm:px-5 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-sm border border-emerald-400/40 shadow-xs shrink-0">
                <Table className="w-4 h-4" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-heading font-bold tracking-tight text-white flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Markyt_Campaign_Tracker.xlsx
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[9px] sm:text-[10px] font-mono font-bold uppercase flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-ping" />
                    Verified Client Data
                  </span>
                </div>
                <span className="text-[11px] text-emerald-200/90 font-mono block">
                  Wellness Client (Tier-1 Metro) • 10-Day Sprint Log
                </span>
              </div>
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-2">
              <div className="bg-emerald-900/90 p-1 rounded-xl border border-emerald-700/60 flex items-center gap-1 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setViewMode('all')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                    viewMode === 'all'
                      ? 'bg-emerald-400 text-slate-950 font-bold shadow-xs'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
                  }`}
                  title="Fit all columns onto screen without sliding"
                >
                  <Columns className="w-3 h-3" />
                  <span>All Columns (Fit Screen)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('key')}
                  className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
                    viewMode === 'key'
                      ? 'bg-emerald-400 text-slate-950 font-bold shadow-xs'
                      : 'text-emerald-200 hover:text-white hover:bg-emerald-800/50'
                  }`}
                  title="Focus on Core KPIs (Spend, Leads, CPL, Strategy)"
                >
                  <LayoutGrid className="w-3 h-3" />
                  <span>Key KPIs Only</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop & Tablet Table (All Visible at once) */}
          <div className="hidden md:block w-full">
            <table className="w-full text-left text-[11px] font-mono table-fixed">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider text-[10px]">
                {viewMode === 'all' ? (
                  <tr>
                    <th className="py-2.5 px-2 w-[5%]">Day</th>
                    <th className="py-2.5 px-2 w-[13%]">Creative / Channel</th>
                    <th className="py-2.5 px-1.5 w-[7%] text-right">Spend</th>
                    <th className="py-2.5 px-1.5 w-[6.5%] text-right">Impr.</th>
                    <th className="py-2.5 px-1.5 w-[6%] text-right">CPM</th>
                    <th className="py-2.5 px-1.5 w-[5%] text-right">Clicks</th>
                    <th className="py-2.5 px-1.5 w-[5.5%] text-right">CTR</th>
                    <th className="py-2.5 px-1.5 w-[5.5%] text-right">CPC</th>
                    <th className="py-2.5 px-1.5 w-[6.5%] text-center">Leads</th>
                    <th className="py-2.5 px-1.5 w-[5.5%] text-right">Conv%</th>
                    <th className="py-2.5 px-1.5 w-[7.5%] text-right">CPL</th>
                    <th className="py-2.5 px-2.5 w-[31%]">Strategic Learning Note</th>
                  </tr>
                ) : (
                  <tr>
                    <th className="py-2.5 px-3 w-[7%]">Day</th>
                    <th className="py-2.5 px-3 w-[18%]">Creative / Channel</th>
                    <th className="py-2.5 px-3 w-[11%] text-right">Amount Spent</th>
                    <th className="py-2.5 px-3 w-[10%] text-right">Clicks (CPC)</th>
                    <th className="py-2.5 px-3 w-[10%] text-center">Leads</th>
                    <th className="py-2.5 px-3 w-[12%] text-right">Cost per Lead</th>
                    <th className="py-2.5 px-3 w-[32%]">Strategic Learning Note</th>
                  </tr>
                )}
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {SAMPLE_SHEET_DATA.map((row, idx) => (
                  <tr 
                    key={row.day} 
                    className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-emerald-50/40`}
                  >
                    {/* Day */}
                    <td className="py-2 px-2 font-bold text-slate-950 truncate">
                      {row.day}
                    </td>

                    {/* Channel / Creative */}
                    <td className="py-2 px-2 text-slate-800">
                      <div className="truncate font-medium text-slate-900" title={row.channel}>
                        {row.channel.replace(' | Meta', '')}
                      </div>
                      <span className="text-[9px] text-slate-500 font-sans block truncate">Meta Ads</span>
                    </td>

                    {/* Amount Spent */}
                    <td className="py-2 px-1.5 font-bold text-slate-950 text-right truncate">
                      ₹{row.amountSpent.toFixed(0)}
                    </td>

                    {viewMode === 'all' ? (
                      <>
                        {/* Impressions */}
                        <td className="py-2 px-1.5 text-slate-600 text-right truncate">
                          {row.impressions.toLocaleString()}
                        </td>

                        {/* CPM */}
                        <td className="py-2 px-1.5 text-slate-600 text-right truncate">
                          ₹{row.cpm.toFixed(0)}
                        </td>

                        {/* Link Clicks */}
                        <td className="py-2 px-1.5 font-semibold text-slate-900 text-right truncate">
                          {row.linkClicks}
                        </td>

                        {/* CTR */}
                        <td className="py-2 px-1.5 text-slate-700 text-right truncate">
                          {row.ctr}
                        </td>

                        {/* CPC */}
                        <td className="py-2 px-1.5 text-slate-700 text-right truncate">
                          ₹{row.cpc.toFixed(1)}
                        </td>
                      </>
                    ) : (
                      /* Combined Clicks & CPC for Key View */
                      <td className="py-2 px-3 text-right truncate">
                        <span className="font-semibold text-slate-900">{row.linkClicks}</span>
                        <span className="text-[10px] text-slate-500 ml-1">(@₹{row.cpc.toFixed(1)})</span>
                      </td>
                    )}

                    {/* Leads */}
                    <td className="py-2 px-1.5 text-center">
                      <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-950 font-bold text-[10px] border border-emerald-300/60">
                        {row.leads} {row.leads === 1 ? 'Lead' : 'Leads'}
                      </span>
                    </td>

                    {viewMode === 'all' && (
                      /* Conversion Rate */
                      <td className="py-2 px-1.5 font-semibold text-emerald-800 text-right truncate">
                        {row.conversionRate}
                      </td>
                    )}

                    {/* Cost per Lead */}
                    <td className="py-2 px-1.5 font-bold text-slate-950 text-right truncate">
                      <span className="text-emerald-950 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200">
                        ₹{row.costPerLead.toFixed(0)}
                      </span>
                    </td>

                    {/* Strategic Note - fully legible and wrapped to fit width */}
                    <td className="py-2 px-2.5 text-[11px] font-sans text-slate-600 leading-snug">
                      <p className="line-clamp-2 hover:line-clamp-none transition-all cursor-default" title={row.strategicNote}>
                        {row.strategicNote}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card / Compact View (No horizontal scrolling on mobile either!) */}
          <div className="md:hidden divide-y divide-slate-200">
            {SAMPLE_SHEET_DATA.map((row, idx) => {
              const isExpanded = expandedNoteIndex === idx;
              return (
                <div key={row.day} className="p-3 bg-white hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs bg-slate-950 text-white px-2 py-0.5 rounded">
                        {row.day}
                      </span>
                      <span className="font-sans font-semibold text-xs text-slate-900">
                        {row.channel.replace(' | Meta', '')}
                      </span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-mono font-bold text-[11px]">
                      {row.leads} {row.leads === 1 ? 'Lead' : 'Leads'}
                    </span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono bg-slate-50 p-2 rounded-lg border border-slate-200/60 mb-2">
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">Spend</span>
                      <span className="font-bold text-slate-950">₹{row.amountSpent.toFixed(0)}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">Clicks</span>
                      <span className="font-medium text-slate-800">{row.linkClicks}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">CTR</span>
                      <span className="font-medium text-slate-800">{row.ctr}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-slate-500 uppercase">Cost/Lead</span>
                      <span className="font-bold text-emerald-700">₹{row.costPerLead.toFixed(0)}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedNoteIndex(isExpanded ? null : idx)}
                    className="w-full text-left text-[11px] font-sans text-slate-600 bg-emerald-50/60 hover:bg-emerald-50 p-2 rounded border border-emerald-200/50 flex items-start gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className={isExpanded ? 'block' : 'line-clamp-1'}>
                      {row.strategicNote}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="bg-slate-100/95 border-t border-slate-200 px-3.5 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-mono">
              <div>
                <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">
                  First 10 Days
                </span>
                <span className="text-sm sm:text-base font-heading font-bold text-slate-950 tracking-tight">
                  ₹{totalSpent.toFixed(2)}{' '}
                  <span className="text-[11px] text-slate-500 font-mono font-normal">
                    / ₹{budgetCap.toLocaleString()} sprint
                  </span>
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">
                  Verified Leads
                </span>
                <span className="text-sm sm:text-base font-heading font-bold text-emerald-700 flex items-center gap-1 tracking-tight">
                  {totalLeads} Leads
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </div>

              <div>
                <span className="text-slate-500 block text-[9px] uppercase font-bold tracking-wider">
                  Blended CPL
                </span>
                <span className="text-sm sm:text-base font-heading font-bold text-slate-950 flex items-center gap-1 tracking-tight">
                  ₹{blendedCpl.toFixed(2)}
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
                </span>
              </div>
            </div>

            {/* Direct Call to Action */}
            <div className="flex items-center gap-2">
              <a
                href="#get-in-touch"
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-heading font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-sm hover:shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Start ₹5,000 Sprint</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

