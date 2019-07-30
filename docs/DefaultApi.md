# Avm.DefaultApi

All URIs are relative to *https://avm.enbisys.com/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFastValuation**](DefaultApi.md#getFastValuation) | **POST** /properties/getFastValuation | 
[**getValuation**](DefaultApi.md#getValuation) | **POST** /properties/getValuation | 


## getFastValuation

> Number getFastValuation(propertyFeatures)



Get only property price valuation without confidence estimation

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyFeatures** | [**PropertyFeatures**](PropertyFeatures.md)| Property features that describe property | 

### Return type

**Number**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## getValuation

> Valuation getValuation(propertyFeatures)

Get property price valuation with confidence estimation


### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **propertyFeatures** | [**PropertyFeatures**](PropertyFeatures.md)| Property features to valuate | 

### Return type

[**Valuation**](Valuation.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json

