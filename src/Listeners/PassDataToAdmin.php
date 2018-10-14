<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Listeners;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\User\User;
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
        $events->listen(Serializing::class, [$this, 'addData']);
    }

    /**
     * Adds settings to admin settings.
     *
     * @param Serializing $event
     */
    public function addData(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class) && $event->actor->isAdmin()) {
            $event->attributes['datitisev-dashboard.data'] = [
                'postCount'       => Post::where('type', 'comment')->count(),
                'discussionCount' => Discussion::count(),
                'userCount'       => User::where('is_email_confirmed', 1)->count(),
            ];
        }
    }
}
