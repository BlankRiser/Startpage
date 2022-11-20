import {
  AdjustmentsHorizontalIcon,
  // XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Arrow,
  Content,
  Root,
  Trigger,
  // Close
} from "@radix-ui/react-popover";

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isOpen?: boolean;
};

export function Popover(props: Props) {
  const { children, icon } = props;
  return (
    <div className="relative inline-block text-left">
      <Root>
        <Trigger asChild>
          {
            <button className="bg-transparent rounded-md p-2 hover:bg-neutral-700/50 focus:bg-neutral-800 ">
              {icon || (
                <AdjustmentsHorizontalIcon
                  className="fill-gray-400 "
                  width={26}
                  height={26}
                />
              )}
            </button>
          }
        </Trigger>
        <Content
          align="center"
          side="bottom"
          sideOffset={4}
          className="radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down rounded-lg px-2 py-4 shadow-md  bg-neutral-800 border border-gray-700"
        >
          <Arrow className="fill-current text-white dark:text-gray-800" />
          <section>{children}</section>
          {/* <Close className="absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
          </Close> */}
        </Content>
      </Root>
    </div>
  );
}
