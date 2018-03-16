<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Listeners;

use Flarum\Core\Discussion;
use Flarum\Core\Post;
use Flarum\Core\User;
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
        $event->settings['datitisev-dashboard.data'] = [
            'php'             => phpversion(),
            'postCount'       => count(Post::where('type', 'comment')->lists('discussion_id', 'id')),
            'discussionCount' => count(Discussion::where('is_approved', 1)->lists('id', 'start_post_id')),
            'userCount'       => count(User::where('is_activated', 1)->lists('id')),
        ];
    }
}
