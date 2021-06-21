/** Quantity that is defined as range, e.g., melting poing */
export interface Range {
    /** The lower value of some  characteristic or property.*/
    minValue?: number;
    /** The upper value of some characteristic or property.*/
    maxValue?: number;
    /**A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for unitCode. */
    unitText?: string; // ToDo I would like to enforce that we either need unitText or unitCode and set it explicelty to no unit (e.g., empty string) if there is no unit
    /**The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
    unitCode?: string;
  }