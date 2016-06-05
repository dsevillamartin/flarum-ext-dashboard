<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Listeners;

use Datitisev\Dashboard\Api\Controllers\GiveDashboardInfo;
use Flagrow\ImageUpload\Api\Serializers\DashboardSerializer;
use Flarum\Event\ConfigureApiRoutes;
use Illuminate\Contracts\Events\Dispatcher;

//use Flarum\Event\PrepareApiAttributes;

class AddDashboardApi
{
    /**
     * Subscribes to the Flarum api routes configuration event.
     *
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureApiRoutes::class, [$this, 'configureApiRoutes']);
        $events->listen(PrepareApiAttributes::class, [$this, 'prepareApiAttributes']);
    }

    /**
     * Registers our routes.
     *
     * @param ConfigureApiRoutes $event
     */
    public function configureApiRoutes(ConfigureApiRoutes $event)
    {
        $event->post('/api/dashboard', 'flarum.admin', GiveDashboardInfo::class);
    }

    /**
     * Gets the api attributes and makes them available to the forum.
     *
     * @param PrepareApiAttributes $event
     */
    public function prepareApiAttributes(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(DashboardSerializer::class)) {
            $event->attributes['isAdmin'] = $event->actor->can('flarum.admin');
        }
    }
}
