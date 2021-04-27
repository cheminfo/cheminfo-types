/**
 * Metadata describing the data source
 */
export interface DataSource {
  type: "experiment" | "simulation" | "literature"; // ToDo: "prediction/calculation" type for easy calculations like cLogP/h-bond donor acceptor
  /**Name of the resource
   * @TJS-examples ['AiiDAlab']
   */
  name: string;
  /**
   * the UUID of the data in some other database, for example, the UUID of the node of the object in AiiDAlab
   * @TJS-examples ['e182c99b-939c-4693-8ca2-092ab8acac46']
   */
  uuid?: string;
  /**
   * Digital object identifier of the source object
   */
  doi?: string;
  /**
   * URL of the source object
   */
  url?: string;
}
