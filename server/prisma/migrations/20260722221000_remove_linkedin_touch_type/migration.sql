-- Move existing LinkedIn touches under Social Media + platform.
UPDATE "Touch"
SET "type" = 'Social Media',
    "socialPlatform" = COALESCE("socialPlatform", 'LinkedIn')
WHERE "type" = 'LinkedIn';

-- Remove LinkedIn as a standalone touch type.
DELETE FROM "TouchType" WHERE "name" = 'LinkedIn';
