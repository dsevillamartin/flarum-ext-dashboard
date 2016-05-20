<?php

/*
 * This file is part of flagrow/flarum-ext-image-upload.
 *
 * Copyright (c) Flagrow.
 *
 * http://flagrow.github.io
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
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
     * @return array
     */
    protected function getDefaultAttributes($model)
    {
        return [];
    }
}