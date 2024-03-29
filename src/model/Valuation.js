/**
 * AVM
 * This is api for AVM (automated valuation machine)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@enbisys.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ValuationPriceDistribution from './ValuationPriceDistribution';

/**
 * The Valuation model module.
 * @module model/Valuation
 * @version 1.0.0
 */
class Valuation {
    /**
     * Constructs a new <code>Valuation</code>.
     * @alias module:model/Valuation
     */
    constructor() { 
        
        Valuation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Valuation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Valuation} obj Optional instance to populate.
     * @return {module:model/Valuation} The populated <code>Valuation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Valuation();

            if (data.hasOwnProperty('mostProbablePrice')) {
                obj['mostProbablePrice'] = ApiClient.convertToType(data['mostProbablePrice'], 'Number');
            }
            if (data.hasOwnProperty('priceRangeFrom')) {
                obj['priceRangeFrom'] = ApiClient.convertToType(data['priceRangeFrom'], 'Number');
            }
            if (data.hasOwnProperty('priceRangeTo')) {
                obj['priceRangeTo'] = ApiClient.convertToType(data['priceRangeTo'], 'Number');
            }
            if (data.hasOwnProperty('confidence')) {
                obj['confidence'] = ApiClient.convertToType(data['confidence'], 'Number');
            }
            if (data.hasOwnProperty('priceDistribution')) {
                obj['priceDistribution'] = ApiClient.convertToType(data['priceDistribution'], [ValuationPriceDistribution]);
            }
        }
        return obj;
    }


}

/**
 * Predicted price, pound
 * @member {Number} mostProbablePrice
 */
Valuation.prototype['mostProbablePrice'] = undefined;

/**
 * Lower price boundary, pound
 * @member {Number} priceRangeFrom
 */
Valuation.prototype['priceRangeFrom'] = undefined;

/**
 * Higher price boundary, pound
 * @member {Number} priceRangeTo
 */
Valuation.prototype['priceRangeTo'] = undefined;

/**
 * Probability (in percents) that actual price is within the specified boundaries
 * @member {Number} confidence
 */
Valuation.prototype['confidence'] = undefined;

/**
 * Describes the probabilities (in percents) that actual price is within particular subranges
 * @member {Array.<module:model/ValuationPriceDistribution>} priceDistribution
 */
Valuation.prototype['priceDistribution'] = undefined;






export default Valuation;

