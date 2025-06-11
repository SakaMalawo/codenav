<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    #[Route('/api/data', methods: ['GET'])]
    public function getData(): JsonResponse
    {
        return new JsonResponse(['message' => 'Hello from Symfony API']);
    }
}
?>