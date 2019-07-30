/**
 * AVM
 * This is api for AVM (automated valuation machine)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@enbisys.com
 *
 */

import ApiClient from '../ApiClient';
import BuiltForm from './BuiltForm';
import EnergyEfficiency from './EnergyEfficiency';
import EnergyRating from './EnergyRating';
import LeaseholdOrFreehold from './LeaseholdOrFreehold';
import RoofInsulation from './RoofInsulation';
import RoofType from './RoofType';
import WallInsulation from './WallInsulation';
import WallType from './WallType';
import WindowGlazingType from './WindowGlazingType';

/**
 * The AdditionalFeatures model module.
 * @module model/AdditionalFeatures
 * @version 1.0.0
 */
class AdditionalFeatures {
    /**
     * Constructs a new <code>AdditionalFeatures</code>.
     * @alias module:model/AdditionalFeatures
     */
    constructor() { 
        
        AdditionalFeatures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdditionalFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdditionalFeatures} obj Optional instance to populate.
     * @return {module:model/AdditionalFeatures} The populated <code>AdditionalFeatures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdditionalFeatures();

            if (data.hasOwnProperty('priceOfPreviousSale')) {
                obj['priceOfPreviousSale'] = ApiClient.convertToType(data['priceOfPreviousSale'], 'Number');
            }
            if (data.hasOwnProperty('dateOfPreviousSale')) {
                obj['dateOfPreviousSale'] = ApiClient.convertToType(data['dateOfPreviousSale'], 'Date');
            }
            if (data.hasOwnProperty('leaseholdOrFreehold')) {
                obj['leaseholdOrFreehold'] = LeaseholdOrFreehold.constructFromObject(data['leaseholdOrFreehold']);
            }
            if (data.hasOwnProperty('wallType')) {
                obj['wallType'] = WallType.constructFromObject(data['wallType']);
            }
            if (data.hasOwnProperty('wallInsulation')) {
                obj['wallInsulation'] = WallInsulation.constructFromObject(data['wallInsulation']);
            }
            if (data.hasOwnProperty('wallEnergyEfficiency')) {
                obj['wallEnergyEfficiency'] = EnergyEfficiency.constructFromObject(data['wallEnergyEfficiency']);
            }
            if (data.hasOwnProperty('roofType')) {
                obj['roofType'] = RoofType.constructFromObject(data['roofType']);
            }
            if (data.hasOwnProperty('roofInsulation')) {
                obj['roofInsulation'] = RoofInsulation.constructFromObject(data['roofInsulation']);
            }
            if (data.hasOwnProperty('roofEnergyEfficiency')) {
                obj['roofEnergyEfficiency'] = EnergyEfficiency.constructFromObject(data['roofEnergyEfficiency']);
            }
            if (data.hasOwnProperty('windowGlazingType')) {
                obj['windowGlazingType'] = WindowGlazingType.constructFromObject(data['windowGlazingType']);
            }
            if (data.hasOwnProperty('windowEnergyEfficiency')) {
                obj['windowEnergyEfficiency'] = EnergyEfficiency.constructFromObject(data['windowEnergyEfficiency']);
            }
            if (data.hasOwnProperty('currentEnergyRating')) {
                obj['currentEnergyRating'] = EnergyRating.constructFromObject(data['currentEnergyRating']);
            }
            if (data.hasOwnProperty('potentialEnergyRating')) {
                obj['potentialEnergyRating'] = EnergyRating.constructFromObject(data['potentialEnergyRating']);
            }
            if (data.hasOwnProperty('annualHeatingCostInPounds')) {
                obj['annualHeatingCostInPounds'] = ApiClient.convertToType(data['annualHeatingCostInPounds'], 'Number');
            }
            if (data.hasOwnProperty('annualHotWaterCostInPounds')) {
                obj['annualHotWaterCostInPounds'] = ApiClient.convertToType(data['annualHotWaterCostInPounds'], 'Number');
            }
            if (data.hasOwnProperty('annualLightingCostInPounds')) {
                obj['annualLightingCostInPounds'] = ApiClient.convertToType(data['annualLightingCostInPounds'], 'Number');
            }
            if (data.hasOwnProperty('annualEnergyConsumptionInKWh')) {
                obj['annualEnergyConsumptionInKWh'] = ApiClient.convertToType(data['annualEnergyConsumptionInKWh'], 'Number');
            }
            if (data.hasOwnProperty('floorHeightInFoot')) {
                obj['floorHeightInFoot'] = ApiClient.convertToType(data['floorHeightInFoot'], 'Number');
            }
            if (data.hasOwnProperty('builtForm')) {
                obj['builtForm'] = BuiltForm.constructFromObject(data['builtForm']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} priceOfPreviousSale
 */
AdditionalFeatures.prototype['priceOfPreviousSale'] = undefined;

/**
 * @member {Date} dateOfPreviousSale
 */
AdditionalFeatures.prototype['dateOfPreviousSale'] = undefined;

/**
 * @member {module:model/LeaseholdOrFreehold} leaseholdOrFreehold
 */
AdditionalFeatures.prototype['leaseholdOrFreehold'] = undefined;

/**
 * @member {module:model/WallType} wallType
 */
AdditionalFeatures.prototype['wallType'] = undefined;

/**
 * @member {module:model/WallInsulation} wallInsulation
 */
AdditionalFeatures.prototype['wallInsulation'] = undefined;

/**
 * @member {module:model/EnergyEfficiency} wallEnergyEfficiency
 */
AdditionalFeatures.prototype['wallEnergyEfficiency'] = undefined;

/**
 * @member {module:model/RoofType} roofType
 */
AdditionalFeatures.prototype['roofType'] = undefined;

/**
 * @member {module:model/RoofInsulation} roofInsulation
 */
AdditionalFeatures.prototype['roofInsulation'] = undefined;

/**
 * @member {module:model/EnergyEfficiency} roofEnergyEfficiency
 */
AdditionalFeatures.prototype['roofEnergyEfficiency'] = undefined;

/**
 * @member {module:model/WindowGlazingType} windowGlazingType
 */
AdditionalFeatures.prototype['windowGlazingType'] = undefined;

/**
 * @member {module:model/EnergyEfficiency} windowEnergyEfficiency
 */
AdditionalFeatures.prototype['windowEnergyEfficiency'] = undefined;

/**
 * @member {module:model/EnergyRating} currentEnergyRating
 */
AdditionalFeatures.prototype['currentEnergyRating'] = undefined;

/**
 * @member {module:model/EnergyRating} potentialEnergyRating
 */
AdditionalFeatures.prototype['potentialEnergyRating'] = undefined;

/**
 * @member {Number} annualHeatingCostInPounds
 */
AdditionalFeatures.prototype['annualHeatingCostInPounds'] = undefined;

/**
 * @member {Number} annualHotWaterCostInPounds
 */
AdditionalFeatures.prototype['annualHotWaterCostInPounds'] = undefined;

/**
 * @member {Number} annualLightingCostInPounds
 */
AdditionalFeatures.prototype['annualLightingCostInPounds'] = undefined;

/**
 * @member {Number} annualEnergyConsumptionInKWh
 */
AdditionalFeatures.prototype['annualEnergyConsumptionInKWh'] = undefined;

/**
 * @member {Number} floorHeightInFoot
 */
AdditionalFeatures.prototype['floorHeightInFoot'] = undefined;

/**
 * @member {module:model/BuiltForm} builtForm
 */
AdditionalFeatures.prototype['builtForm'] = undefined;






export default AdditionalFeatures;

