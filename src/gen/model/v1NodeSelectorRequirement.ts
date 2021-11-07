/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
*/
export class V1NodeSelectorRequirement {
    /**
    * The label key that the selector applies to.
    */
    'key': string;
    /**
    * Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
    */
    'operator': string;
    /**
    * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
    */
    'values'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSelectorRequirement.attributeTypeMap;
    }
}

