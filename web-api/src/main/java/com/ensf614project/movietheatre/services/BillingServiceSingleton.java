package com.ensf614project.movietheatre.services;

public class BillingServiceSingleton {
    private static BillingServiceSingleton onlyInstance;
    BillingService billingService;

    private BillingServiceSingleton() {
        billingService = new MockBillingService();
    }

    public static BillingServiceSingleton getOnlyInstance() {
        if (onlyInstance == null) {
            onlyInstance = new BillingServiceSingleton();
        }
        return onlyInstance;
    }

    public static BillingService getOnlyBillingService() {
        if (onlyInstance == null) {
            onlyInstance = new BillingServiceSingleton();
        }
        return onlyInstance.billingService;
    }

    public static void setOnlyInstance(BillingServiceSingleton onlyInstance) {
        BillingServiceSingleton.onlyInstance = onlyInstance;
    }
}
