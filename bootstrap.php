<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard;

use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {

    // add assets
    $events->subscribe(Listeners\AddClientAssets::class);
    $events->subscribe(Listeners\AddDashboardApi::class);
    $events->subscribe(Listeners\PassDataToAdmin::class);
    $events->subscribe(Listeners\LoadSettingsFromDatabase::class);
};
