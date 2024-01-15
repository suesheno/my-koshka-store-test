export interface IImage {
    "image": {
        "data": {
            "id": number;
            "attributes": {
                "name": string;
                "alternativeText": string;
                "caption": string;
                "width": number;
                "height": number;
                "formats": string;
                "hash": string;
                "ext": string;
                "mime": string;
                "size": number;
                "url": string;
                "previewUrl": string;
                "provider": string;
                "provider_metadata": string;
                "related": {
                    "data": [
                        {
                            "id": number;
                            "attributes": object
                        }
                    ]
                };
                "folder": {
                    "data": {
                        "id": number;
                        "attributes": {
                            "name": string;
                            "pathId": number;
                            "parent": {
                                "data": {
                                    "id": number;
                                    "attributes": object
                                }
                            };
                            "children": {
                                "data": [
                                    {
                                        "id": number;
                                        "attributes": object
                                    }
                                ]
                            };
                            "files": {
                                "data": [
                                    {
                                        "id": number;
                                        "attributes": {
                                            "name": string;
                                            "alternativeText": string;
                                            "caption": string;
                                            "width": number;
                                            "height": number;
                                            "formats": string;
                                            "hash": string;
                                            "ext": string;
                                            "mime": string;
                                            "size": number;
                                            "url": string;
                                            "previewUrl": string;
                                            "provider": string;
                                            "provider_metadata": string;
                                            "related": {
                                                "data": [
                                                    {
                                                        "id": number;
                                                        "attributes": object
                                                    }
                                                ]
                                            };
                                            "folder": {
                                                "data": {
                                                    "id": number;
                                                    "attributes": object
                                                }
                                            };
                                            "folderPath": string;
                                            "createdAt": string;
                                            "updatedAt": string;
                                            "createdBy": {
                                                "data": {
                                                    "id": number;
                                                    "attributes": {
                                                        "firstname": string;
                                                        "lastname": string;
                                                        "username": string;
                                                        "email": string;
                                                        "resetPasswordToken": string;
                                                        "registrationToken": string;
                                                        "isActive": boolean;
                                                        "roles": {
                                                            "data": [
                                                                {
                                                                    "id": number;
                                                                    "attributes": {
                                                                        "name": string;
                                                                        "code": string;
                                                                        "description": string;
                                                                        "users": {
                                                                            "data": [
                                                                                {
                                                                                    "id": number;
                                                                                    "attributes": object;
                                                                                }
                                                                            ]
                                                                        };
                                                                        "permissions": {
                                                                            "data": [
                                                                                {
                                                                                    "id": number;
                                                                                    "attributes": {
                                                                                        "action": string;
                                                                                        "actionParameters": string;
                                                                                        "subject": string;
                                                                                        "properties": string;
                                                                                        "conditions": string;
                                                                                        "role": {
                                                                                            "data": {
                                                                                                "id": number;
                                                                                                "attributes": object
                                                                                            }
                                                                                        };
                                                                                        "createdAt": string;
                                                                                        "updatedAt": string;
                                                                                        "createdBy": {
                                                                                            "data": {
                                                                                                "id": number;
                                                                                                "attributes": object
                                                                                            }
                                                                                        };
                                                                                        "updatedBy": {
                                                                                            "data": {
                                                                                                "id": number;
                                                                                                "attributes": object
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            ]
                                                                        };
                                                                        "createdAt": string;
                                                                        "updatedAt": string;
                                                                        "createdBy": {
                                                                            "data": {
                                                                                "id": number;
                                                                                "attributes": object
                                                                            }
                                                                        };
                                                                        "updatedBy": {
                                                                            "data": {
                                                                                "id": number;
                                                                                "attributes": object
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        };
                                                        "blocked": true;
                                                        "preferedLanguage": string;
                                                        "createdAt": string;
                                                        "updatedAt": string;
                                                        "createdBy": {
                                                            "data": {
                                                                "id": number;
                                                                "attributes": object
                                                            }
                                                        };
                                                        "updatedBy": {
                                                            "data": {
                                                                "id": number;
                                                                "attributes": object
                                                            }
                                                        }
                                                    }
                                                }
                                            };
                                            "updatedBy": {
                                                "data": {
                                                    "id": number;
                                                    "attributes": object
                                                }
                                            }
                                        }
                                    }
                                ]
                            };
                            "path": string;
                            "createdAt": string;
                            "updatedAt": string;
                            "createdBy": {
                                "data": {
                                    "id": number;
                                    "attributes": object
                                }
                            };
                            "updatedBy": {
                                "data": {
                                    "id": number;
                                    "attributes": object
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}