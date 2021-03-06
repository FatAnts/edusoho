<?php
namespace Topxia\Common;

use Topxia\Service\Common\ConnectionFactory;
use Topxia\Service\Common\TestCaseConnection;

class TestConnectionFactory implements ConnectionFactory
{
    protected $container;
    protected $connection;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function getConnection()
    {
        if(empty($this->connection)){

            $connection = $this->container->get('database_connection');
            $connection = new TestCaseConnection($connection);
            
            $connection->exec('SET NAMES UTF8');
            $this->connection = $connection;
        }

        return $this->connection;
    }
}