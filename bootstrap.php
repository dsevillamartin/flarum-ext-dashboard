<?php

namespace Datitisev\Dashboard;

use Flarum\Foundation\Application;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {

    // add assets
    $events->subscribe(Listeners\AddClientAssets::class);
    $events->subscribe(Listeners\AddDashboardApi::class);
    $events->subscribe(Listeners\PassDataToAdmin::class);
    $events->subscribe(Listeners\LoadSettingsFromDatabase::class);

};