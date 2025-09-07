import React from 'react';

const Errors: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Error Codes</h1>
      <p className="mb-8">
        When developing your application with Vercel, you may encounter a variety of errors. They can reflect issues that happen with external providers such as domain services or internal problems at the level of your application's deployment or your usage of platform features.
      </p>
      <p className="mb-8">
        For general error handling guidance, that covers dashboard related errors, see <a href="/docs/errors/error-list" className="text-blue-500 hover:underline">General Errors</a>.
      </p>

      <h2 id="application-errors" className="text-2xl font-bold mb-4">Application errors</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><a href="/docs/errors/BODY_NOT_A_STRING_FROM_FUNCTION" className="text-blue-500 hover:underline">BODY_NOT_A_STRING_FROM_FUNCTION <span className="text-gray-500">Function502</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_BLOCKED" className="text-blue-500 hover:underline">DEPLOYMENT_BLOCKED <span className="text-gray-500">Deployment403</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_DELETED" className="text-blue-500 hover:underline">DEPLOYMENT_DELETED <span className="text-gray-500">Deployment410</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_DISABLED" className="text-blue-500 hover:underline">DEPLOYMENT_DISABLED <span className="text-gray-500">Deployment402</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_NOT_FOUND" className="text-blue-500 hover:underline">DEPLOYMENT_NOT_FOUND <span className="text-gray-500">Deployment404</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_NOT_READY_REDIRECTING" className="text-blue-500 hover:underline">DEPLOYMENT_NOT_READY_REDIRECTING <span className="text-gray-500">Deployment303</span></a></li>
        <li><a href="/docs/errors/DEPLOYMENT_PAUSED" className="text-blue-500 hover:underline">DEPLOYMENT_PAUSED <span className="text-gray-500">Deployment503</span></a></li>
        <li><a href="/docs/errors/DNS_HOSTNAME_EMPTY" className="text-blue-500 hover:underline">DNS_HOSTNAME_EMPTY <span className="text-gray-500">DNS502</span></a></li>
        <li><a href="/docs/errors/DNS_HOSTNAME_NOT_FOUND" className="text-blue-500 hover:underline">DNS_HOSTNAME_NOT_FOUND <span className="text-gray-500">DNS502</span></a></li>
        <li><a href="/docs/errors/DNS_HOSTNAME_RESOLVE_FAILED" className="text-blue-500 hover:underline">DNS_HOSTNAME_RESOLVE_FAILED <span className="text-gray-500">DNS502</span></a></li>
        <li><a href="/docs/errors/DNS_HOSTNAME_RESOLVED_PRIVATE" className="text-blue-500 hover:underline">DNS_HOSTNAME_RESOLVED_PRIVATE <span className="text-gray-500">DNS404</span></a></li>
        <li><a href="/docs/errors/DNS_HOSTNAME_SERVER_ERROR" className="text-blue-500 hover:underline">DNS_HOSTNAME_SERVER_ERROR <span className="text-gray-500">DNS502</span></a></li>
        <li><a href="/docs/errors/EDGE_FUNCTION_INVOCATION_FAILED" className="text-blue-500 hover:underline">EDGE_FUNCTION_INVOCATION_FAILED <span className="text-gray-500">Function500</span></a></li>
        <li><a href="/docs/errors/EDGE_FUNCTION_INVOCATION_TIMEOUT" className="text-blue-500 hover:underline">EDGE_FUNCTION_INVOCATION_TIMEOUT <span className="text-gray-500">Function504</span></a></li>
        <li><a href="/docs/errors/FALLBACK_BODY_TOO_LARGE" className="text-blue-500 hover:underline">FALLBACK_BODY_TOO_LARGE <span className="text-gray-500">Cache502</span></a></li>
        <li><a href="/docs/errors/FUNCTION_INVOCATION_FAILED" className="text-blue-500 hover:underline">FUNCTION_INVOCATION_FAILED <span className="text-gray-500">Function500</span></a></li>
        <li><a href="/docs/errors/FUNCTION_INVOCATION_TIMEOUT" className="text-blue-500 hover:underline">FUNCTION_INVOCATION_TIMEOUT <span className="text-gray-500">Function504</span></a></li>
        <li><a href="/docs/errors/FUNCTION_PAYLOAD_TOO_LARGE" className="text-blue-500 hover:underline">FUNCTION_PAYLOAD_TOO_LARGE <span className="text-gray-500">Function413</span></a></li>
        <li><a href="/docs/errors/FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE" className="text-blue-500 hover:underline">FUNCTION_RESPONSE_PAYLOAD_TOO_LARGE <span className="text-gray-500">Function500</span></a></li>
        <li><a href="/docs/errors/FUNCTION_THROTTLED" className="text-blue-500 hover:underline">FUNCTION_THROTTLED <span className="text-gray-500">Function503</span></a></li>
        <li><a href="/docs/errors/INFINITE_LOOP_DETECTED" className="text-blue-500 hover:underline">INFINITE_LOOP_DETECTED <span className="text-gray-500">Runtime508</span></a></li>
        <li><a href="/docs/errors/INVALID_IMAGE_OPTIMIZE_REQUEST" className="text-blue-500 hover:underline">INVALID_IMAGE_OPTIMIZE_REQUEST <span className="text-gray-500">Image400</span></a></li>
        <li><a href="/docs/errors/INVALID_REQUEST_METHOD" className="text-blue-500 hover:underline">INVALID_REQUEST_METHOD <span className="text-gray-500">Request405</span></a></li>
        <li><a href="/docs/errors/MALFORMED_REQUEST_HEADER" className="text-blue-500 hover:underline">MALFORMED_REQUEST_HEADER <span className="text-gray-500">Request400</span></a></li>
        <li><a href="/docs/errors/MICROFRONTENDS_MIDDLEWARE_ERROR" className="text-blue-500 hover:underline">MICROFRONTENDS_MIDDLEWARE_ERROR <span className="text-gray-500">Function500</span></a></li>
        <li><a href="/docs/errors/MIDDLEWARE_INVOCATION_FAILED" className="text-blue-500 hover:underline">MIDDLEWARE_INVOCATION_FAILED <span className="text-gray-500">Function500</span></a></li>
        <li><a href="/docs/errors/MIDDLEWARE_INVOCATION_TIMEOUT" className="text-blue-500 hover:underline">MIDDLEWARE_INVOCATION_TIMEOUT <span className="text-gray-500">Function504</span></a></li>
        <li><a href="/docs/errors/MIDDLEWARE_RUNTIME_DEPRECATED" className="text-blue-500 hover:underline">MIDDLEWARE_RUNTIME_DEPRECATED <span className="text-gray-500">Runtime503</span></a></li>
        <li><a href="/docs/errors/NO_RESPONSE_FROM_FUNCTION" className="text-blue-500 hover:underline">NO_RESPONSE_FROM_FUNCTION <span className="text-gray-500">Function502</span></a></li>
        <li><a href="/docs/errors/NOT_FOUND" className="text-blue-500 hover:underline">NOT_FOUND <span className="text-gray-500">Deployment404</span></a></li>
        <li><a href="/docs/errors/OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED" className="text-blue-500 hover:underline">OPTIMIZED_EXTERNAL_IMAGE_REQUEST_FAILED <span className="text-gray-500">Image502</span></a></li>
        <li><a href="/docs/errors/OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID" className="text-blue-500 hover:underline">OPTIMIZED_EXTERNAL_IMAGE_REQUEST_INVALID <span className="text-gray-500">Image502</span></a></li>
        <li><a href="/docs/errors/OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED" className="text-blue-500 hover:underline">OPTIMIZED_EXTERNAL_IMAGE_REQUEST_UNAUTHORIZED <span className="text-gray-500">Image502</span></a></li>
        <li><a href="/docs/errors/OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS" className="text-blue-500 hover:underline">OPTIMIZED_EXTERNAL_IMAGE_TOO_MANY_REDIRECTS <span className="text-gray-500">Image502</span></a></li>
        <li><a href="/docs/errors/RANGE_END_NOT_VALID" className="text-blue-500 hover:underline">RANGE_END_NOT_VALID <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/RANGE_GROUP_NOT_VALID" className="text-blue-500 hover:underline">RANGE_GROUP_NOT_VALID <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/RANGE_MISSING_UNIT" className="text-blue-500 hover:underline">RANGE_MISSING_UNIT <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/RANGE_START_NOT_VALID" className="text-blue-500 hover:underline">RANGE_START_NOT_VALID <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/RANGE_UNIT_NOT_SUPPORTED" className="text-blue-500 hover:underline">RANGE_UNIT_NOT_SUPPORTED <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/REQUEST_HEADER_TOO_LARGE" className="text-blue-500 hover:underline">REQUEST_HEADER_TOO_LARGE <span className="text-gray-500">Request431</span></a></li>
        <li><a href="/docs/errors/RESOURCE_NOT_FOUND" className="text-blue-500 hover:underline">RESOURCE_NOT_FOUND <span className="text-gray-500">Request404</span></a></li>
        <li><a href="/docs/errors/ROUTER_CANNOT_MATCH" className="text-blue-500 hover:underline">ROUTER_CANNOT_MATCH <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR" className="text-blue-500 hover:underline">ROUTER_EXTERNAL_TARGET_CONNECTION_ERROR <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/ROUTER_EXTERNAL_TARGET_ERROR" className="text-blue-500 hover:underline">ROUTER_EXTERNAL_TARGET_ERROR <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR" className="text-blue-500 hover:underline">ROUTER_EXTERNAL_TARGET_HANDSHAKE_ERROR <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/ROUTER_TOO_MANY_HAS_SELECTIONS" className="text-blue-500 hover:underline">ROUTER_TOO_MANY_HAS_SELECTIONS <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/SANDBOX_NOT_FOUND" className="text-blue-500 hover:underline">SANDBOX_NOT_FOUND <span className="text-gray-500">Sandbox404</span></a></li>
        <li><a href="/docs/errors/SANDBOX_NOT_LISTENING" className="text-blue-500 hover:underline">SANDBOX_NOT_LISTENING <span className="text-gray-500">Sandbox502</span></a></li>
        <li><a href="/docs/errors/SANDBOX_STOPPED" className="text-blue-500 hover:underline">SANDBOX_STOPPED <span className="text-gray-500">Sandbox410</span></a></li>
        <li><a href="/docs/errors/TOO_MANY_FILESYSTEM_CHECKS" className="text-blue-500 hover:underline">TOO_MANY_FILESYSTEM_CHECKS <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/TOO_MANY_FORKS" className="text-blue-500 hover:underline">TOO_MANY_FORKS <span className="text-gray-500">Routing502</span></a></li>
        <li><a href="/docs/errors/TOO_MANY_RANGES" className="text-blue-500 hover:underline">TOO_MANY_RANGES <span className="text-gray-500">Request416</span></a></li>
        <li><a href="/docs/errors/URL_TOO_LONG" className="text-blue-500 hover:underline">URL_TOO_LONG <span className="text-gray-500">Request414</span></a></li>
      </ul>

      <h2 id="platform-errors" className="text-2xl font-bold mt-8 mb-4">Platform errors</h2>
      <p className="mb-8">
        The following errors are related to the Vercel platform. If you encounter one of these errors, contact <a href="/help" className="text-blue-500 hover:underline">Vercel support</a>.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><a href="/docs/errors/FUNCTION_THROTTLED" className="text-blue-500 hover:underline">FUNCTION_THROTTLED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_CACHE_ERROR" className="text-blue-500 hover:underline">INTERNAL_CACHE_ERROR <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_CACHE_KEY_TOO_LONG" className="text-blue-500 hover:underline">INTERNAL_CACHE_KEY_TOO_LONG <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_CACHE_LOCK_FULL" className="text-blue-500 hover:underline">INTERNAL_CACHE_LOCK_FULL <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_CACHE_LOCK_TIMEOUT" className="text-blue-500 hover:underline">INTERNAL_CACHE_LOCK_TIMEOUT <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_DEPLOYMENT_FETCH_FAILED" className="text-blue-500 hover:underline">INTERNAL_DEPLOYMENT_FETCH_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_EDGE_FUNCTION_INVOCATION_FAILED" className="text-blue-500 hover:underline">INTERNAL_EDGE_FUNCTION_INVOCATION_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_EDGE_FUNCTION_INVOCATION_TIMEOUT" className="text-blue-500 hover:underline">INTERNAL_EDGE_FUNCTION_INVOCATION_TIMEOUT <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_FUNCTION_INVOCATION_FAILED" className="text-blue-500 hover:underline">INTERNAL_FUNCTION_INVOCATION_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_FUNCTION_INVOCATION_TIMEOUT" className="text-blue-500 hover:underline">INTERNAL_FUNCTION_INVOCATION_TIMEOUT <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_FUNCTION_NOT_FOUND" className="text-blue-500 hover:underline">INTERNAL_FUNCTION_NOT_FOUND <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_FUNCTION_NOT_READY" className="text-blue-500 hover:underline">INTERNAL_FUNCTION_NOT_READY <span className="text-gray-500">Internal500</span></a></li>
        <li>INTERNAL_FUNCTION_SERVICE_UNAVAILABLE <span className="text-gray-500">Internal500</span></li>
        <li><a href="/docs/errors/INTERNAL_MICROFRONTENDS_BUILD_ERROR" className="text-blue-500 hover:underline">INTERNAL_MICROFRONTENDS_BUILD_ERROR <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_MICROFRONTENDS_INVALID_CONFIGURATION_ERROR" className="text-blue-500 hover:underline">INTERNAL_MICROFRONTENDS_INVALID_CONFIGURATION_ERROR <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_MICROFRONTENDS_UNEXPECTED_ERROR" className="text-blue-500 hover:underline">INTERNAL_MICROFRONTENDS_UNEXPECTED_ERROR <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_MISSING_RESPONSE_FROM_CACHE" className="text-blue-500 hover:underline">INTERNAL_MISSING_RESPONSE_FROM_CACHE <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_OPTIMIZED_IMAGE_REQUEST_FAILED" className="text-blue-500 hover:underline">INTERNAL_OPTIMIZED_IMAGE_REQUEST_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_ROUTER_CANNOT_PARSE_PATH" className="text-blue-500 hover:underline">INTERNAL_ROUTER_CANNOT_PARSE_PATH <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_STATIC_REQUEST_FAILED" className="text-blue-500 hover:underline">INTERNAL_STATIC_REQUEST_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_UNARCHIVE_FAILED" className="text-blue-500 hover:underline">INTERNAL_UNARCHIVE_FAILED <span className="text-gray-500">Internal500</span></a></li>
        <li><a href="/docs/errors/INTERNAL_UNEXPECTED_ERROR" className="text-blue-500 hover:underline">INTERNAL_UNEXPECTED_ERROR <span className="text-gray-500">Internal500</span></a></li>
      </ul>
    </div>
  );
};

export default Errors;
