<?php

/*
 * This file is part of datitisev/flarum-ext-dashboard
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
                'postCount'       => count(Post::where('type', 'comment')->count()),
                'discussionCount' => count(Discussion::where('is_approved', 1)->count()),
                'userCount'       => count(User::where('is_activated', 1)->count()),
            ];
        }
    }
}
