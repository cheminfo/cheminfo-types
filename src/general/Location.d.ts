/**Describes the location of some object. */
export interface Location {
  /** Name of the institution
   * @TJS-examples ["EPFL", "Heriot-Watt University"]
   */
  entity: string;
  /** Name or code of the building
   * @TJS-examples ["I17", "Main building"]
   */
  building?: string;
  /**Name or code of the room in which the object is localized
   * @TJS-examples ["1 B3", "Lab 1"]
   */
  room?: string;
  /** Internal code that is used to identify the location
   * @TJS-examples ["I17 1 B3"]
   */
  code: string;
}
