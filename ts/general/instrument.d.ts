import { Location } from "./location";
/** The instrument with which a spectrum was measured.
 *  CHMO: 0000998
 */
export interface Instrument {
  /** The name of the instrument.
   * @TJS-examples ["BELSORP MAX II"]
   */
  model: string;
  /** The name of the instrument manufacturer
   * @TJS-examples ["Microtrac Retsch GmbH", "Bruker"]
   */
  manufacturer: string;
  /** The INTERNAL serial number of the instrument, e.g., the inventory number of the instrument in a university
   * @TJS-examples ["B105863"]
   */
  serialNumber?: string;
  /** Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   * @TJS-examples ["345"]
   */
  sku?: string;
  /** The name of the software and the version number
   * @TJS-examples ["BELMaster™ 7"]
   */
  software?: string;
  location?: Location;
}
