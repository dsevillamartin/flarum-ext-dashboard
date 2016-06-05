<?php

/*
 * This file is part of datitisev/flarum-ext-admindashboard
 *
 * (c) David Sevilla Martín <dsevilla192@icloud.com>
 *
 * For the full copyright and license information, please view the MIT license
 */

namespace Datitisev\Dashboard\Api\Controllers;

use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class GiveDashboardInfo
{
    /**
     * The serializer instance for this request.
     *
     * @var DashboardSerializer
     */
    public $serializer = DashboardSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * Get the data to be serialized and assigned to the response document.
     *
     * @param ServerRequestInterface $request
     * @param Document               $document
     *
     * @return mixed
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');

        return [
            phpversion(),
        ];
    }
}
