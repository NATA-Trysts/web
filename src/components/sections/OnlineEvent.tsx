import { Container } from '@components/Container';
import { KeyboardShortcuts } from '@components/KeyboardShortcuts';

export const OnlineEvent = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Online event
          <br className="hidden md:inline-block" />
          in your fingertip
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-gray-300 md:text-xl">
          Perform any task with shortcut. These can be customise up to 3 combo
          keys as your familliar
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex w-full snap-x snap-mandatory items-center justify-center gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative order-3 flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-gray-100 bg-glass-gradient p-8 text-center md:order-first md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Friendly with your keyboard</p>
          <p className="text-md text-gray-300">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
        </div>
      </div>
    </div>
  </div>
);
