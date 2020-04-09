<?php

/*
 * This file is part of datitisev/flarum-ext-dashboard.
 *
 * Copyright (c) 2020 David Sevilla Martín.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datitisev\Dashboard;

use Flarum\Discussion\Discussion;
use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Post\Post;
use Flarum\User\User;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less')
        ->content(function (Document $document) {
            $document->payload['datitisev-dashboard.data'] = [
                'postCount'       => Post::where('type', 'comment')->count(),
                'discussionCount' => Discussion::count(),
                'userCount'       => User::where('is_email_confirmed', 1)->count(),
            ];
        }),
    new Extend\Locales(__DIR__.'/resources/locale'),
];
