<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Flagrow\ImageUpload\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;

class DashboardSerializer extends AbstractSerializer
{
    /**
     * @var string
     */
    protected $type = 'admin';

    /**
     * Get the default set of serialized attributes for a model.
     *
     * @param object|array $model
     *
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        return [];
    }
}
