/** @jsx jsx */
import { jsx, useColor } from '@vtex/admin-ui'

export type LogoProps = React.SVGAttributes<SVGElement>

export default function IndexIllustration(props: LogoProps) {
  const substract = useColor('background')
  const surface = useColor('muted.3')
  const lines = useColor('text')

  const colors = {
    substract,
    surface,
    lines,
  }

  return (
    <svg {...props} width="980" height="489.48047" viewBox="0 0 980 489.48047">
      <path
        d="M317.06006,205.25977a205.979,205.979,0,0,0-77.68457,15.06689c-.99365.40723-1.99121.81641-2.98828,1.23486A206.78061,206.78061,0,0,0,110,412.31982v225.94a9.01016,9.01016,0,0,0,9,9l.17871.01562c173.4668,31.50195,342.106,47.46484,501.37207,47.46484q3.58155,0,7.15625-.01074c156.55469-.47656,308.99414-16.43945,453.083-47.44726l.21-.02246a9.00984,9.00984,0,0,0,9-9v-424a9.01015,9.01015,0,0,0-9-9Z"
        transform="translate(-110 -205.25977)"
        fill={colors.substract}
      />
      <path
        id="f4300551-56ef-4356-8f30-d0080b223343"
        data-name="Path 40"
        d="M855.79948,385.45241a5.94683,5.94683,0,0,0,0,11.89205H1004.8852a5.94683,5.94683,0,1,0,.19525-11.89205q-.09762-.00165-.19525,0Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <path
        d="M1038.69419,383.79676a1.17,1.17,0,0,0,0,1.65472l5.02282,5.02288H1031.3312a1.17005,1.17005,0,1,0,0,2.34011H1043.717l-5.02282,5.02287a1.17005,1.17005,0,1,0,1.65468,1.65473l7.02029-7.02029a1.17011,1.17011,0,0,0,0-1.65473l-7.02029-7.02029A1.17,1.17,0,0,0,1038.69419,383.79676Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M821.92744,383.79676a1.17,1.17,0,0,1,0,1.65472l-5.02282,5.02288h12.38581a1.17006,1.17006,0,1,1,0,2.34011H816.90462l5.02282,5.02287a1.17,1.17,0,0,1-1.65467,1.65473l-7.0203-7.02029a1.17011,1.17011,0,0,1,0-1.65473l7.0203-7.02029A1.17,1.17,0,0,1,821.92744,383.79676Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <g opacity="0.4">
        <circle cx="751.81992" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="778.44451" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="805.06909" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="831.69368" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="858.31826" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="884.94285" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="911.56744" cy="50.3899" r="6.3899" fill={colors.lines} />
        <circle cx="751.81992" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="778.44451" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="805.06909" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="831.69368" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="858.31826" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="884.94285" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="911.56744" cy="70.62459" r="6.3899" fill={colors.lines} />
        <circle cx="751.81992" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="778.44451" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="805.06909" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="831.69368" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="858.31826" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="884.94285" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="911.56744" cy="90.85927" r="6.3899" fill={colors.lines} />
        <circle cx="751.81992" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="778.44451" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="751.81992" cy="131.32864" r="6.3899" fill={colors.lines} />
        <circle cx="778.44451" cy="131.32864" r="6.3899" fill={colors.lines} />
        <circle cx="805.06909" cy="131.32864" r="6.3899" fill={colors.lines} />
        <circle cx="805.06909" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="831.69368" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="858.31826" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="884.94285" cy="111.09396" r="6.3899" fill={colors.lines} />
        <circle cx="911.56744" cy="111.09396" r="6.3899" fill={colors.lines} />
      </g>
      <path
        d="M770.15723,580.71875a35.27246,35.27246,0,1,1,35.27246-35.27246A35.31251,35.31251,0,0,1,770.15723,580.71875Zm0-68.54492a33.27246,33.27246,0,1,0,33.27246,33.27246A33.30991,33.30991,0,0,0,770.15723,512.17383Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <path
        d="M783.68058,542.06548H773.53835V531.92315a3.38081,3.38081,0,0,0-6.76162,0v10.14233H756.6344a3.38076,3.38076,0,0,0,0,6.76152h10.14233v10.14233a3.38081,3.38081,0,0,0,6.76162,0V548.827h10.14223a3.38076,3.38076,0,1,0,0-6.76152Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <g opacity="0.4">
        <circle cx="54.0239" cy="374.76553" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="353.83257" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="332.89961" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="311.96665" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="291.03369" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="270.10073" r="5.02391" fill={colors.lines} />
        <circle cx="54.0239" cy="249.16777" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="374.76553" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="353.83257" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="332.89961" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="311.96665" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="291.03369" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="270.10073" r="5.02391" fill={colors.lines} />
        <circle cx="69.93295" cy="249.16777" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="374.76553" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="353.83257" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="332.89961" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="311.96665" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="291.03369" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="270.10073" r="5.02391" fill={colors.lines} />
        <circle cx="85.842" cy="249.16777" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="374.76553" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="353.83257" r="5.02391" fill={colors.lines} />
        <circle cx="117.6601" cy="374.76553" r="5.02391" fill={colors.lines} />
        <circle cx="117.6601" cy="353.83257" r="5.02391" fill={colors.lines} />
        <circle cx="117.6601" cy="332.89961" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="332.89961" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="311.96665" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="291.03369" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="270.10073" r="5.02391" fill={colors.lines} />
        <circle cx="101.75105" cy="249.16777" r="5.02391" fill={colors.lines} />
      </g>
      <path
        d="M607.40837,238.262H273.66631a6.18856,6.18856,0,0,0-6.1823,6.18237v285.3832a6.18855,6.18855,0,0,0,6.1823,6.18236H607.40837a6.1886,6.1886,0,0,0,6.18237-6.18236V244.44434A6.18861,6.18861,0,0,0,607.40837,238.262Zm3.70479,291.56557a3.71813,3.71813,0,0,1-3.70479,3.71637H273.66631a3.71067,3.71067,0,0,1-3.70472-3.71637V244.44434a3.71067,3.71067,0,0,1,3.70472-3.71637H607.40837a3.71813,3.71813,0,0,1,3.70479,3.71637Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <path
        d="M350.70245,485.26609c0,.43995-.01159.87989-.03477,1.30825a25.17464,25.17464,0,0,1-50.28069,0c-.02317-.42836-.03469-.8683-.03469-1.30825a25.17508,25.17508,0,1,1,50.35015,0Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M581.475,468.47884H383.66331a4.19682,4.19682,0,0,0,0,8.39363H581.475a4.19682,4.19682,0,0,0,0-8.39363Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <path
        d="M468.78046,493.65971H383.66331a4.191,4.191,0,0,0,0,8.382h85.11715a4.191,4.191,0,1,0,0-8.382Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M686.69824,438.84082H352.958a8.559,8.559,0,0,1-8.54883-8.5498V283.8291a8.55888,8.55888,0,0,1,8.54883-8.54931H686.69824a8.55888,8.55888,0,0,1,8.54883,8.54931V430.291A8.559,8.559,0,0,1,686.69824,438.84082ZM352.958,278.27979a5.55529,5.55529,0,0,0-5.54883,5.54931V430.291a5.55572,5.55572,0,0,0,5.54883,5.5498H686.69824a5.55572,5.55572,0,0,0,5.54883-5.5498V283.8291a5.55529,5.55529,0,0,0-5.54883-5.54931Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M420.9242,328.69922a4.19591,4.19591,0,1,0,0,8.39182H618.73156a4.19591,4.19591,0,1,0,0-8.39182Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M420.9242,353.01178a4.19591,4.19591,0,0,0,0,8.39183H618.73156a4.19592,4.19592,0,0,0,0-8.39183Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M420.9242,377.02952a4.19591,4.19591,0,0,0,0,8.39183h85.11711a4.19592,4.19592,0,0,0,0-8.39183Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M741.72363,500.89258l-33.51977-47.30731,10.85107,2.2611a1.50113,1.50113,0,1,0,.61212-2.9392l-16.17059-3.36628-2.18262,16.37055a1.50115,1.50115,0,1,0,2.976.39642l1.46319-10.99322L739.27637,502.627a1.49976,1.49976,0,1,0,2.44726-1.73437Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M559.66593,638.58034H321.40883a4.41735,4.41735,0,0,1-4.41216-4.41216V575.06677a4.41735,4.41735,0,0,1,4.41216-4.41216h238.2571a4.41735,4.41735,0,0,1,4.41216,4.41216v59.10141A4.41735,4.41735,0,0,1,559.66593,638.58034Zm-238.2571-66.16087a2.65019,2.65019,0,0,0-2.6473,2.6473v59.10141a2.65019,2.65019,0,0,0,2.6473,2.64729h238.2571a2.65019,2.65019,0,0,0,2.64729-2.64729V575.06677a2.65019,2.65019,0,0,0-2.64729-2.6473Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <circle cx="248.42913" cy="397.08997" r="17.97281" fill={colors.lines} />
      <path
        d="M399.93776,590.36787a2.99547,2.99547,0,1,0,0,5.99093H541.15269a2.99546,2.99546,0,1,0,0-5.99093Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M399.93776,608.34068a2.99547,2.99547,0,1,0,0,5.99093H460.703a2.99546,2.99546,0,1,0,0-5.99093Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M874.0245,428.0156H979.91678a4.41735,4.41735,0,0,1,4.41216,4.41216V542.71023a4.41735,4.41735,0,0,1-4.41216,4.41216H874.0245a4.41736,4.41736,0,0,1-4.41217-4.41216V432.42776A4.41736,4.41736,0,0,1,874.0245,428.0156ZM979.91678,545.35752a2.65019,2.65019,0,0,0,2.6473-2.64729V432.42776a2.6502,2.6502,0,0,0-2.6473-2.6473H874.0245a2.65019,2.65019,0,0,0-2.6473,2.6473V542.71023a2.65019,2.65019,0,0,0,2.6473,2.64729Z"
        transform="translate(-110 -205.25977)"
        fill={colors.surface}
      />
      <path
        d="M957.35324,524.38014a2.99547,2.99547,0,0,0,0-5.99094H896.588a2.99547,2.99547,0,0,0,0,5.99094Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M957.35324,506.73149a2.99547,2.99547,0,1,0,0-5.99093H896.588a2.99547,2.99547,0,1,0,0,5.99093Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
      <path
        d="M926.97042,450.75785a18.85509,18.85509,0,1,1-18.85509,18.85509A18.87645,18.87645,0,0,1,926.97042,450.75785Z"
        transform="translate(-110 -205.25977)"
        fill={colors.lines}
      />
    </svg>
  )
}
