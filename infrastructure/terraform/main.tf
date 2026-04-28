provider "azurerm" {
  features {}
}

provider "aws" {
  region = var.aws_region
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-${var.project_name}-${var.environment}"
  location = var.location
}

# Azure Kubernetes Service for Hosting the Scorely IQ Control Plane
resource "azurerm_kubernetes_cluster" "aks" {
  name                = "aks-${var.project_name}-${var.environment}"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "scorely-iq"

  default_node_pool {
    name       = "default"
    node_count = 3
    vm_size    = "Standard_DS3_v2"
  }

  identity {
    type = "SystemAssigned"
  }
}

# PostgreSQL for Storing Versioned Scorecards and BU Mappings
resource "azurerm_postgresql_flexible_server" "db" {
  name                   = "db-${var.project_name}-${var.environment}"
  resource_group_name    = azurerm_resource_group.rg.name
  location               = azurerm_resource_group.rg.location
  version                = "13"
  administrator_login    = "psqladmin"
  administrator_password = var.db_password
  storage_mb             = 32768
  sku_name               = "GP_Standard_D2ds_v4"
}

# Multi-Cloud Identity Management
resource "azurerm_user_assigned_identity" "grc_identity" {
  name                = "id-grc-${var.environment}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
}
