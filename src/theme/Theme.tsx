import { Button } from '@/components/ui/button'; 
import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type ColorSwatchProps = {
  name: string;
  variable: string;
  textColor: string;
};

type ColorsType = {
  name: string;
  variable: string;
  textColor: string;
}

type ColorPalleteProps = {
  title: string,
  colors: ColorsType[]
}

const ColorSwatch = ({ name, variable, textColor }: ColorSwatchProps) => (
  <div className="flex flex-col">
    <div
      style={{ backgroundColor: `var(${variable})`, color: `var(${textColor})` }}
      className="flex h-20 w-full items-center justify-center rounded-md border border-outline-variant text-sm font-medium"
    >
      {name}
    </div>
    <div className="mt-2 text-center">
      <p className="text-xs font-semibold text-on-surface">{name}</p>
      <p className="text-xs text-on-surface-variant font-mono">{variable}</p>
    </div>
  </div>
);

const ColorPalette = ({ title, colors }: ColorPalleteProps) => (
  <section className="mb-12">
    <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-6 pb-2 border-b border-outline">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {colors.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </section>
);

export function Theme() {
  const colorPalettes = {
    primary: [
      { name: 'Primary', variable: '--primary', textColor: '--on-primary' },
      { name: 'On Primary', variable: '--on-primary', textColor: '--primary' },
      { name: 'Primary Container', variable: '--primary-container', textColor: '--on-primary-container' },
      { name: 'On Primary Container', variable: '--on-primary-container', textColor: '--primary-container' },
    ],
    secondary: [
        { name: 'Secondary', variable: '--secondary', textColor: '--on-secondary' },
        { name: 'On Secondary', variable: '--on-secondary', textColor: '--secondary' },
        { name: 'Secondary Container', variable: '--secondary-container', textColor: '--on-secondary-container' },
        { name: 'On Secondary Container', variable: '--on-secondary-container', textColor: '--secondary-container' },
    ],
    tertiary: [
        { name: 'Tertiary', variable: '--tertiary', textColor: '--on-tertiary' },
        { name: 'On Tertiary', variable: '--on-tertiary', textColor: '--tertiary' },
        { name: 'Tertiary Container', variable: '--tertiary-container', textColor: '--on-tertiary-container' },
        { name: 'On Tertiary Container', variable: '--on-tertiary-container', textColor: '--tertiary-container' },
    ],
    error: [
      { name: 'Error', variable: '--error', textColor: '--on-error' },
      { name: 'On Error', variable: '--on-error', textColor: '--error' },
      { name: 'Error Container', variable: '--error-container', textColor: '--on-error-container' },
      { name: 'On Error Container', variable: '--on-error-container', textColor: '--error-container' },
    ],
    surface: [
      { name: 'Background', variable: '--background', textColor: '--on-background' },
      { name: 'On Background', variable: '--on-background', textColor: '--background' },
      { name: 'Surface', variable: '--surface', textColor: '--on-surface' },
      { name: 'On Surface', variable: '--on-surface', textColor: '--surface' },
      { name: 'Surface Variant', variable: '--surface-variant', textColor: '--on-surface-variant' },
      { name: 'On Surface Variant', variable: '--on-surface-variant', textColor: '--surface-variant' },
      { name: 'Inverse Surface', variable: '--inverse-surface', textColor: '--inverse-on-surface' },
      { name: 'Inverse On Surface', variable: '--inverse-on-surface', textColor: '--inverse-surface' },
    ],
    outline: [
      { name: 'Outline', variable: '--outline', textColor: '--on-surface' },
      { name: 'Outline Variant', variable: '--outline-variant', textColor: '--on-surface' },
    ]
  };

  const spacing = [
    { name: '1', rem: '0.25rem' }, { name: '2', rem: '0.5rem' },
    { name: '3', rem: '0.75rem' }, { name: '4', rem: '1rem' },
    { name: '5', rem: '1.25rem' }, { name: '6', rem: '1.5rem' },
    { name: '8', rem: '2rem' }, { name: '10', rem: '2.5rem' },
    { name: '12', rem: '3rem' }, { name: '16', rem: '4rem' },
    { name: '24', rem: '6rem' }
  ];

  return (
    <div className="bg-background text-foreground p-4 md:p-8 font-sans">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-background">Theme & Design System</h1>
        <p className="mt-2 text-lg text-on-surface-variant">A visual guide to the colors, typography, and components of the Ath Theme.</p>
      </header>
      
      <main>
        <ColorPalette title="Primary Colors" colors={colorPalettes.primary} />
        <ColorPalette title="Secondary Colors" colors={colorPalettes.secondary} />
        <ColorPalette title="Tertiary Colors" colors={colorPalettes.tertiary} />
        <ColorPalette title="Error & Status Colors" colors={colorPalettes.error} />
        <ColorPalette title="Surface & Background Colors" colors={colorPalettes.surface} />
        <ColorPalette title="Outlines" colors={colorPalettes.outline} />

        <section className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-on-background mb-6 pb-2 border-b border-outline">Typography</h2>
            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">Heading 1 (extrabold, 4xl)</h1>
                <h2 className="text-3xl font-semibold tracking-tight text-on-surface">Heading 2 (semibold, 3xl)</h2>
                <h3 className="text-2xl font-semibold tracking-tight text-on-surface">Heading 3 (semibold, 2xl)</h3>
                <h4 className="text-xl font-semibold tracking-tight text-on-surface">Heading 4 (semibold, xl)</h4>
                <p className="text-base leading-7 text-on-surface" >This is the default body text. It's designed for long-form reading and should be clear and legible. Use it for descriptions, articles, and general content.</p>
                <p className="text-sm text-on-surface">This is a smaller, muted text style, perfect for captions, helper text, and secondary information.</p>
            </div>
        </section>

        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-on-background mb-6 pb-2 border-b border-outline">Spacing</h2>
            <div className="space-y-3">
              {spacing.map(s => (
                <div key={s.name} className="flex items-center gap-4">
                  <span className="font-mono text-sm w-16 text-right text-on-surface">{s.name} ({s.rem})</span>
                  <div style={{ width: s.rem }} className="h-6 bg-primary-container rounded"></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-on-background mb-6 pb-2 border-b border-outline">Border Radius</h2>
            <div className="flex items-center gap-4">
               <div className="w-24 h-24 bg-secondary-container rounded-[--radius] flex items-center justify-center">
                  <span className="text-on-secondary-container font-mono text-sm">var(--radius)</span>
               </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6 pb-2 border-b border-outline text-on-surface">Component Showcase</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-on-surface mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center p-6 bg-surface-container rounded-lg">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="error">Error</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-on-surface">Alerts</h3>
              <div className="space-y-4 p-6 bg-surface-container rounded-lg">
                <Alert>
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    This is a default alert. Use it for general information.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <Terminal className="h-4 w-4" />
                  <AlertTitle>Error!</AlertTitle>
                  <AlertDescription>
                    This is a destructive alert. Use it for critical errors and warnings.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
