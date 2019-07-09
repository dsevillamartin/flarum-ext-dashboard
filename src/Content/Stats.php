<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Content;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Frontend\Document;

class Stats
{
    /**
     * Subscribes to the Flarum events.
     *
     * @param Dispatcher $events
     */
    public function __invoke(Document $document)
    {
        $document->payload['datitisev-dashboard'] = [
            'postCount'       => Post::where('type', 'comment')->count(),
            'discussionCount' => Discussion::count(),
            'userCount'       => User::where('is_email_confirmed', 1)->count(),
        ];
    }
}
