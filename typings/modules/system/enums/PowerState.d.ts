declare module "love.system" {
    /**
     * The basic state of the system's power supply.
     * @link [PowerState](https://love2d.org/wiki/PowerState)
     */
    export type PowerState = "unknown" | "battery" | "nobattery" | "charging" | "charged";
}
