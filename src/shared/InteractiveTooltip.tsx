import { Tooltip, TooltipProps } from "@material-ui/core";

/**
 * @returns Tooltip optimized for touchscreen friendly interaction
 */
export default function InteractiveTooltip(props: TooltipProps) {
  return (
    <Tooltip
      enterTouchDelay={0}
      leaveTouchDelay={6000}
      interactive
      {...props}
    />
  );
}
