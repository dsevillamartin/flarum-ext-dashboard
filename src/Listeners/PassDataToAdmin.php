<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Listeners;

use Flarum\Event\PrepareUnserializedSettings;
use Illuminate\Contracts\Events\Dispatcher;

class PassDataToAdmin
{
    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(PrepareUnserializedSettings::class, [$this, 'prepareUnserializedSettings']);
    }

    /**
     * Adds settings to admin settings.
     *
     * @param PrepareUnserializedSettings $event
     */
    public function prepareUnserializedSettings(PrepareUnserializedSettings $event)
    {
        $event->settings['phpVersion'] = phpversion();
    }
}
