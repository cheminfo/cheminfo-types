export interface Software {
  /** Version of the software instance.
   * @TJS-examples ['v0.0.1', 'rev111']
   */
  version?: string;
  /**    The name of the item.
   * @TJS-examples ['tga-analysis', 'ChemDraw']
   */
  name: string;
  /**    A description of the item. */
  description?: string;
  /**    If the file can be downloaded, URL to download the binary
   * @TJS-examples ['https://github.com/cheminfo/tga-spectrum/releases/tag/v0.16.0']
   */
  url?: string;
}
