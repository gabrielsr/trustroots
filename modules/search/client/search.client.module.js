// THIS FILE IS AUTOMATICALLY GENERATED DO NOT EDIT

import AppConfig from '@/modules/core/client/app/config';

import '@/modules/core/client/core.client.module';

AppConfig.registerModule('search', ['core']);

// config
require('@/modules/search/client/config/search.client.routes.js');

// controllers
require('@/modules/search/client/controllers/search-map.client.controller.js');
require('@/modules/search/client/controllers/search-signup.client.controller.js');
require('@/modules/search/client/controllers/search.client.controller.js');

// directives
require('@/modules/search/client/directives/tr-my-tribes-toggle.client.directive.js');
require('@/modules/search/client/directives/tr-tribes-toggle.client.directive.js');
require('@/modules/search/client/directives/tr-types-toggle.client.directive.js');

// services
require('@/modules/search/client/services/filters.client.service.js');
require('@/modules/search/client/services/search-map.client.service.js');