<?php

namespace Datitisev\Dashboard\Listeners;

use Flarum\Event\PrepareUnserializedSettings;
use Illuminate\Contracts\Events\Dispatcher;

class PassDataToAdmin {

    /**
     * Subscribes to the Flarum events
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events) {
        $events->listen(PrepareUnserializedSettings::class, [$this, 'prepareUnserializedSettings']);
    }

    /**
     * Adds settings to admin settings
     *
     * @param PrepareUnserializedSettings $event
     */
    public function prepareUnserializedSettings(PrepareUnserializedSettings $event) {
        $event->settings['phpVersion'] = phpversion();
        $event->settings['mysqlVersion'] = mysqli_get_server_info() ? mysqli_get_server_info() : "Unknown";
    }

}